(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("navToggle");
  const mobile = document.getElementById("navMobile");

  if (toggle && mobile) {
    toggle.addEventListener("click", function () {
      mobile.classList.toggle("open");
      toggle.setAttribute(
        "aria-label",
        mobile.classList.contains("open") ? "Close menu" : "Open menu"
      );
    });

    mobile.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobile.classList.remove("open");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 12) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
