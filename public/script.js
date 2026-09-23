(function () {
  const screenshot = document.getElementById("hero-screenshot");
  const buttons = document.querySelectorAll(".mode-btn");
  const sources = {
    light: "assets/detour-screenshot.png",
    dark: "assets/detour-screenshot-dark.png",
  };

  // Preload the off-mode image so the first toggle doesn't flash.
  const preload = new Image();
  preload.src = sources.dark;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      if (!sources[mode] || screenshot.src.endsWith(sources[mode])) return;
      screenshot.src = sources[mode];
      buttons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-pressed", active ? "true" : "false");
      });
    });
  });

  // Feature loops play only while on screen, and never with reduced motion
  // (the poster frame stands in).
  const loops = document.querySelectorAll("video.feature-media");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (loops.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting && !reduceMotion.matches) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.35 });
    loops.forEach((video) => observer.observe(video));
  }

  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
