document.addEventListener("DOMContentLoaded", () => {

  /* ============================================================
     SIDE MENU TOGGLE
  ============================================================ */
  const logo = document.getElementById("logoClick");
  const menu = document.getElementById("sideMenu");

  if (logo && menu) {
    logo.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }

  /* ============================================================
     CARD DROPDOWN SYSTEM
     - Click card title → expand description
     - Auto-close other open cards
     - Smooth animation
  ============================================================ */
  const titles = document.querySelectorAll(".card-title");

  titles.forEach(title => {
    title.addEventListener("click", () => {
      const targetId = title.getAttribute("data-target");
      const desc = document.getElementById(targetId);

      if (!desc) return;

      // Close all other descriptions
      document.querySelectorAll(".card-desc").forEach(d => {
        if (d !== desc) {
          d.style.maxHeight = null;
          d.style.opacity = 0;
          d.style.padding = "0 1rem";
        }
      });

      // Toggle selected description
      if (!desc.style.maxHeight || desc.style.maxHeight === "0px") {
        desc.style.maxHeight = desc.scrollHeight + "px";
        desc.style.opacity = 1;
        desc.style.padding = "1rem";
      } else {
        desc.style.maxHeight = null;
        desc.style.opacity = 0;
        desc.style.padding = "0 1rem";
      }
    });
  });

  /* ============================================================
     CONTACT FORM HANDLER
     - Prevents default
     - Shows confirmation
     - Resets form
  ============================================================ */
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      // Worker-safe confirmation
      alert("Message sent! Thank you for reaching out.");

      form.reset();
    });
  }

  /* ============================================================
     FLOATING BUTTON HOVER EFFECTS
  ============================================================ */
  const floatBtns = document.querySelectorAll(".float-btn");

  floatBtns.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.08)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  });

});
