window.addEventListener("load", () => {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach(bar => {
      const percent = bar.getAttribute("data-percent");
      bar.style.width = percent;
    });
  });
  