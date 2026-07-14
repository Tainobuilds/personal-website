// ---------- Mobile menu toggle ----------
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  mainNav.classList.toggle("is-open");
});

// ---------- Services accordion ----------
const serviceItems = document.querySelectorAll(".service");

serviceItems.forEach((item) => {
  const toggle = item.querySelector(".service-toggle");

  toggle.addEventListener("click", () => {
    const alreadyOpen = item.classList.contains("is-open");

    serviceItems.forEach((other) => {
      other.classList.remove("is-open");
      other.querySelector(".service-toggle").setAttribute("aria-expanded", "false");
    });

    if (!alreadyOpen) {
      item.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    }
  });
});
