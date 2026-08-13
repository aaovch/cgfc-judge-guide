document.querySelectorAll("[data-updated]").forEach((node) => {
  node.textContent = "обновлено 13.08.2026";
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.setAttribute("tabindex", "-1");
  });
});
