/* PROTOTYPE — throwaway. The interactive tool "island": platform × category × fit filter over the
 * JSON dataset, re-rendering the result list in place (no navigation, no framework).
 * ASTRO MAPPING: this is the ONE hydrated island (client:visible) — vanilla JS by default per the
 * ticket-08 decision; static shell stays zero-JS. */

(function () {
  var products = window.PRODUCTS || [];
  var els = {};

  var FIT_LABEL = { native: "Native", direct: "Direct-fit", adapter: "Needs adapter" };

  function uniq(list) { return Array.from(new Set(list)).sort(); }

  function fillSelect(sel, values, allLabel) {
    sel.innerHTML =
      '<option value="">' + allLabel + "</option>" +
      values.map(function (v) { return '<option value="' + v + '">' + v + "</option>"; }).join("");
  }

  function readFilters() {
    var fits = Array.prototype.slice
      .call(document.querySelectorAll('input[name="fit"]:checked'))
      .map(function (c) { return c.value; });
    return {
      platform: els.platform.value,
      category: els.category.value,
      fits: fits,
    };
  }

  function matches(p, f) {
    if (f.platform && p.platform !== f.platform) return false;
    if (f.category && p.category !== f.category) return false;
    if (f.fits.length && f.fits.indexOf(p.fit) === -1) return false;
    return true;
  }

  function buyslot(p) {
    var a = p.affiliate;
    if (a.affiliate_enabled && a.affiliate_url) {
      return (
        '<div class="buyslot">' +
          '<a class="btn-buy" data-enabled="true" rel="sponsored nofollow" href="' + a.affiliate_url + '">Buy on Amazon</a>' +
          '<span class="hole-tag">affiliate · disclosed</span>' +
        "</div>"
      );
    }
    // pre-monetization default: inert placeholder, space reserved.
    return (
      '<div class="buyslot">' +
        '<span class="btn-buy" data-enabled="false" aria-disabled="true">Buy link</span>' +
        '<span class="hole-tag">◦ affiliate hole (off)</span>' +
      "</div>"
    );
  }

  function rowHTML(p) {
    var badge =
      '<span class="badge badge--' +
      (p.fit === "native" ? "native" : p.fit === "direct" ? "direct" : "adapter") +
      '">' + FIT_LABEL[p.fit] + "</span>";
    var adapterNote = p.fit === "adapter" && p.adapter
      ? ' · via <strong>' + p.adapter + "</strong>" : "";
    var batWarn = p.battery_included ? "" : '<span class="warn">⚠ battery not included</span>';
    return (
      '<article class="row">' +
        '<div class="thumb" aria-hidden="true">' + p.icon + "</div>" +
        '<div class="meta">' +
          '<p class="name">' + p.name + " " + badge + "</p>" +
          '<p class="sub">' + p.platform + " · " + p.category + " · " + p.price_band + adapterNote + " " + batWarn + "</p>" +
        "</div>" +
        buyslot(p) +
      "</article>"
    );
  }

  function render() {
    var f = readFilters();
    var hits = products.filter(function (p) { return matches(p, f); });

    els.count.innerHTML = "<span>" + hits.length + "</span> product" + (hits.length === 1 ? "" : "s");

    if (!hits.length) {
      els.list.innerHTML =
        '<div class="card" style="padding:var(--space-8);text-align:center;color:var(--color-text-muted)">' +
        "No matches yet — try clearing a filter." + "</div>";
      return;
    }
    els.list.innerHTML = '<div class="card">' + hits.map(rowHTML).join("") + "</div>";
  }

  function init() {
    els.platform = document.getElementById("f-platform");
    els.category = document.getElementById("f-category");
    els.count = document.getElementById("result-count");
    els.list = document.getElementById("result-list");
    if (!els.platform) return; // not the tool page

    fillSelect(els.platform, uniq(products.map(function (p) { return p.platform; })), "All platforms");
    fillSelect(els.category, uniq(products.map(function (p) { return p.category; })), "All categories");

    document.getElementById("tool-form").addEventListener("input", render);
    document.getElementById("tool-form").addEventListener("submit", function (e) { e.preventDefault(); render(); });
    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
