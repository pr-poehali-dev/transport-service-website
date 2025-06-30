// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  const nav = document.querySelector(".nav");
  const btn = document.querySelector(".mobile-menu-btn");

  if (nav.style.display === "flex") {
    nav.style.display = "none";
    btn.innerHTML = "☰";
  } else {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "100%";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.background = "white";
    nav.style.padding = "1rem";
    nav.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
    btn.innerHTML = "✕";
  }
}

// Contact modal functions
function openContactModal() {
  const modal = document.getElementById("contactModal");
  modal.style.display = "block";
}

function closeContactModal() {
  const modal = document.getElementById("contactModal");
  modal.style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("contactModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Form submission handlers
function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // Simulate form submission
  showNotification(
    "Спасибо! Ваша заявка принята. Мы свяжемся с вами в течение 15 минут.",
    "success",
  );
  form.reset();
}

function submitQuickOrder(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // Simulate form submission
  showNotification("Спасибо! Мы перезвоним вам в ближайшее время.", "success");
  form.reset();
  closeContactModal();
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notification
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === "success" ? "✓" : "ℹ"}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === "success" ? "#10b981" : "#3b82f6"};
        color: white;
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        z-index: 3000;
        max-width: 400px;
        animation: slideIn 0.3s ease-out;
    `;

  const content = notification.querySelector(".notification-content");
  content.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.5rem;
    `;

  const closeBtn = notification.querySelector(".notification-close");
  closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: auto;
    `;

  // Add animation keyframes
  if (!document.querySelector("#notificationStyles")) {
    const style = document.createElement("style");
    style.id = "notificationStyles";
    style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
    document.head.appendChild(style);
  }

  document.body.appendChild(notification);

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

// Navigation link handling
document.addEventListener("DOMContentLoaded", function () {
  // Add click handlers to navigation links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      scrollToSection(targetId);

      // Close mobile menu if open
      const nav = document.querySelector(".nav");
      const btn = document.querySelector(".mobile-menu-btn");
      if (window.innerWidth <= 768 && nav.style.display === "flex") {
        nav.style.display = "none";
        btn.innerHTML = "☰";
      }
    });
  });

  // Gallery image zoom effect
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      const img = this.querySelector("img");
      const overlay = this.querySelector(".gallery-overlay");

      // Create fullscreen overlay
      const fullscreenOverlay = document.createElement("div");
      fullscreenOverlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                z-index: 4000;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            `;

      const fullscreenImg = document.createElement("img");
      fullscreenImg.src = img.src;
      fullscreenImg.alt = img.alt;
      fullscreenImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
                border-radius: 1rem;
            `;

      fullscreenOverlay.appendChild(fullscreenImg);
      document.body.appendChild(fullscreenOverlay);

      // Close on click
      fullscreenOverlay.addEventListener("click", function () {
        this.remove();
      });
    });
  });

  // Phone number formatting
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach((input) => {
    input.addEventListener("input", function (e) {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length > 0) {
        if (value.length <= 1) {
          value = "+7 (" + value;
        } else if (value.length <= 4) {
          value = "+7 (" + value.substring(1);
        } else if (value.length <= 7) {
          value = "+7 (" + value.substring(1, 4) + ") " + value.substring(4);
        } else if (value.length <= 9) {
          value =
            "+7 (" +
            value.substring(1, 4) +
            ") " +
            value.substring(4, 7) +
            "-" +
            value.substring(7);
        } else {
          value =
            "+7 (" +
            value.substring(1, 4) +
            ") " +
            value.substring(4, 7) +
            "-" +
            value.substring(7, 9) +
            "-" +
            value.substring(9, 11);
        }
      }
      e.target.value = value;
    });
  });

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 0.6s ease-out forwards";
      }
    });
  }, observerOptions);

  // Add animation styles
  if (!document.querySelector("#scrollAnimationStyles")) {
    const style = document.createElement("style");
    style.id = "scrollAnimationStyles";
    style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .animate-on-scroll {
                opacity: 0;
                transform: translateY(30px);
            }
        `;
    document.head.appendChild(style);
  }

  // Add animation class to elements
  const animatedElements = document.querySelectorAll(
    ".service-card, .fleet-card, .gallery-item, .stat-item, .contact-item",
  );
  animatedElements.forEach((el) => {
    el.classList.add("animate-on-scroll");
    observer.observe(el);
  });

  // Stats counter animation
  function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent =
        Math.floor(current) + (target >= 1000 ? "K+" : target >= 50 ? "+" : "");
    }, 20);
  }

  // Observe stats for counter animation
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const numberElement = entry.target.querySelector(".stat-number");
          const text = numberElement.textContent;
          const number = parseInt(text.replace(/\D/g, ""));

          if (number > 0) {
            animateCounter(numberElement, number);
            statsObserver.unobserve(entry.target);
          }
        }
      });
    },
    { threshold: 0.5 },
  );

  document.querySelectorAll(".stat-item").forEach((stat) => {
    statsObserver.observe(stat);
  });
});

// Form validation
function validateForm(form) {
  const requiredFields = form.querySelectorAll("[required]");
  let isValid = true;

  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      isValid = false;
      field.style.borderColor = "#ef4444";

      // Remove error styling on input
      field.addEventListener(
        "input",
        function () {
          this.style.borderColor = "#e5e7eb";
        },
        { once: true },
      );
    }
  });

  // Phone validation
  const phoneField = form.querySelector('input[type="tel"]');
  if (phoneField && phoneField.value) {
    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(phoneField.value)) {
      isValid = false;
      phoneField.style.borderColor = "#ef4444";
      showNotification(
        "Пожалуйста, введите корректный номер телефона",
        "error",
      );
    }
  }

  return isValid;
}

// Update form submission to include validation
const originalSubmitForm = submitForm;
submitForm = function (event) {
  event.preventDefault();

  if (validateForm(event.target)) {
    originalSubmitForm(event);
  }
};

const originalSubmitQuickOrder = submitQuickOrder;
submitQuickOrder = function (event) {
  event.preventDefault();

  if (validateForm(event.target)) {
    originalSubmitQuickOrder(event);
  }
};
