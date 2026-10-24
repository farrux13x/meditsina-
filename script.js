// Mobil menyu
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// Qabulga yozilish formasi
const form = document.getElementById("bookingForm");
const success = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  success.hidden = false;
  form.reset();
  setTimeout(() => (success.hidden = true), 5000);
});
