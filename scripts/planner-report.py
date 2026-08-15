#!/usr/bin/env python3
"""Normalize a Google Keyword Planner historical-metrics export into a
readable table on stdout for /idea-validate.

Handles the real export shape: UTF-16LE with BOM, tab-separated despite the
.csv extension, 2-row preamble before the header, and aggregate segmentation
rows before the keywords. Bids are printed in the account currency, verbatim —
USD conversion is the agent's job (live rate, cited in the dossier).

Usage: python3 scripts/planner-report.py <path-to-keyword-planner.csv>
"""
import csv
import pathlib
import sys

COLUMNS = [
    ("Keyword", "Keyword"),
    ("Avg. monthly searches", "Avg searches"),
    ("Three month change", "3-mo"),
    ("YoY change", "YoY"),
    ("Competition", "Competition"),
    ("Top of page bid (low range)", "Bid low"),
    ("Top of page bid (high range)", "Bid high"),
]


def main() -> int:
    if len(sys.argv) != 2:
        print(__doc__.strip(), file=sys.stderr)
        return 2
    path = pathlib.Path(sys.argv[1])
    if not path.exists():
        print(f"error: {path} not found", file=sys.stderr)
        return 1

    text = path.read_text(encoding="utf-16")  # handles BOM
    lines = text.splitlines()
    if len(lines) < 4:
        print("error: file too short to be a Planner export", file=sys.stderr)
        return 1

    title, date_range = lines[0], lines[1].strip('"')
    rows = list(csv.DictReader(lines[2:], delimiter="\t"))

    currency = next((r["Currency"] for r in rows if r.get("Currency")), "?")
    keywords = [r for r in rows if r.get("Keyword", "").strip()]

    def cell(row, col):
        v = (row.get(col) or "").strip()
        if col == "Avg. monthly searches" and v.endswith(".0"):
            v = v[:-2]
        return v

    table = []
    zero_volume = []
    for r in keywords:
        if not cell(r, "Avg. monthly searches"):
            zero_volume.append(r["Keyword"])
            continue
        table.append([cell(r, src) for src, _ in COLUMNS])

    headers = [h for _, h in COLUMNS]
    widths = [
        max(len(headers[i]), *(len(row[i]) for row in table)) if table else len(headers[i])
        for i in range(len(headers))
    ]

    print(f"{title}  |  {date_range}  |  bids in {currency} (convert to USD yourself)")
    print()
    print("  ".join(h.ljust(w) for h, w in zip(headers, widths)))
    print("  ".join("-" * w for w in widths))
    for row in table:
        print("  ".join(v.ljust(w) for v, w in zip(row, widths)))
    if zero_volume:
        print()
        print("Zero/no-data keywords (empty metrics in export):")
        for kw in zero_volume:
            print(f"  - {kw}")
    print()
    print("Note: Avg searches are order-of-magnitude buckets (50/500/5k/50k/500k), not exact counts.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
