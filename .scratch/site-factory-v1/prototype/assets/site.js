/* PROTOTYPE — throwaway. Shared shell: injects header/footer + the skin switcher, and applies
 * the active skin from ?skin= (persisted so it survives page-to-page nav).
 *
 * ASTRO MAPPING: everything here becomes a static Astro Layout.astro (header/nav/footer partials
 * + <slot/>). The skin-switcher bar is PROTOTYPE-ONLY — in production a site just sets
 * <html data-skin="workshop"> once and ships one skin. */

(function () {
  var SKINS = ["workshop", "slate", "sunrise"];
  var KEY = "proto-skin";

  function currentSkin() {
    var q = new URLSearchParams(location.search).get("skin");
    if (q && SKINS.indexOf(q) !== -1) return q;
    var saved = localStorage.getItem(KEY);
    return saved && SKINS.indexOf(saved) !== -1 ? saved : "workshop";
  }

  function applySkin(skin) {
    document.documentElement.setAttribute("data-skin", skin);
    localStorage.setItem(KEY, skin);
    document.querySelectorAll(".skin-bar button[data-skin]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.skin === skin));
    });
  }

  var NAV = [
    { href: "index.html", label: "Finder" },
    { href: "platform-category.html", label: "Milwaukee M18 fans" },
    { href: "methodology.html", label: "How we verify" },
    { href: "faq.html", label: "FAQ" },
    { href: "about.html", label: "About" },
  ];

  function page() {
    var p = location.pathname.split("/").pop();
    return p === "" ? "index.html" : p;
  }

  function buildHeader() {
    var here = page();
    var links = NAV.map(function (n) {
      var cur = n.href === here ? ' aria-current="page"' : "";
      return '<a href="' + n.href + '"' + cur + ">" + n.label + "</a>";
    }).join("");
    return (
      '<a class="skip-link" href="#main">Skip to content</a>' +
      '<header class="site-header"><div class="container bar">' +
        '<a class="brand" href="index.html"><span class="mark">RB</span>Runs&nbsp;On&nbsp;Your&nbsp;Battery</a>' +
        '<nav class="site-nav" aria-label="Primary">' + links + "</nav>" +
      "</div></header>"
    );
  }

  function buildFooter() {
    return (
      '<footer class="site-footer"><div class="container cols">' +
        "<div><strong>Runs On Your Battery</strong><br>Independent, hand-verified battery-gadget compatibility.</div>" +
        '<nav class="legal-links" aria-label="Footer">' +
          '<a href="privacy.html">Privacy &amp; Disclosure</a>' +
          '<a href="about.html">About &amp; Contact</a>' +
          '<a href="methodology.html">How we verify</a>' +
        "</nav>" +
      "</div></footer>" +
      /* consent-banner scaffold: present but inert unless a consent-vendor is chosen */
      '<div class="consent-banner" data-active="false" role="dialog" aria-label="Cookie consent">' +
        "<span>We use privacy-friendly analytics (no cookies).</span>" +
        "<button type=\"button\">OK</button>" +
      "</div>"
    );
  }

  function buildSkinBar() {
    var btns = SKINS.map(function (s) {
      return '<button type="button" data-skin="' + s + '">' + s + "</button>";
    }).join("");
    return (
      '<div class="skin-bar" role="region" aria-label="Prototype skin switcher">' +
        "<strong>PROTOTYPE</strong> <span class=\"note\">skin/token demo — same markup, 3 skins:</span>" +
        btns +
        '<span class="spacer"></span>' +
        '<span class="note">flip skins to prove templates never change</span>' +
      "</div>"
    );
  }

  function mount() {
    var h = document.querySelector("[data-shell=header]");
    if (h) h.innerHTML = buildHeader();
    var f = document.querySelector("[data-shell=footer]");
    if (f) f.innerHTML = buildFooter();

    document.body.insertAdjacentHTML("beforeend", buildSkinBar());
    document.querySelectorAll(".skin-bar button[data-skin]").forEach(function (b) {
      b.addEventListener("click", function () { applySkin(b.dataset.skin); });
    });
    applySkin(currentSkin());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
