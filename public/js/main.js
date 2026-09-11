document.addEventListener("DOMContentLoaded", () => {

  // Side menu toggle
  const logo = document.getElementById("logoClick");
  const menu = document.getElementById("sideMenu");

  logo.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  // Contact form
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Message sent! Thank you for reaching out.");
      form.reset();
    });
  }
});
