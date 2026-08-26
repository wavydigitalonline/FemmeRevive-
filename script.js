(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.getElementById("navToggle");
  var mobile = document.getElementById("navMobile");

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

  // Soft autoplay for videos when in view (muted only)
  if ("IntersectionObserver" in window) {
    var vids = document.querySelectorAll(".sig-video, .reel-item video");
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var v = entry.target;
          if (entry.isIntersecting) {
            v.play().catch(function () {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: 0.35 }
    );
    vids.forEach(function (v) {
      io.observe(v);
    });
  }
})();
