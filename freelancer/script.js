// 🔥 DARK MODE FUNCTIONALITY
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    const body = document.body;

    if (darkModeToggle) {
        // Load dark mode state from localStorage
        if (localStorage.getItem("darkMode") === "enabled") {
            body.classList.add("dark-mode");
            darkModeToggle.textContent = "☀️"; // Light mode icon
        }

        darkModeToggle.addEventListener("click", () => {
            const isDarkMode = body.classList.toggle("dark-mode");
            darkModeToggle.textContent = isDarkMode ? "☀️" : "🌙"; // Toggle icon
            localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
        });
    }

    // 🔥 DROPDOWN MENU FUNCTIONALITY
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        const dropdownContent = dropdown.querySelector(".dropdown-content");
        if (!dropdownContent) return;

        dropdown.addEventListener("mouseenter", () => {
            dropdownContent.style.display = "block";
            setTimeout(() => {
                dropdownContent.style.opacity = "1";
                dropdownContent.style.transform = "translateY(10px)";
            }, 10);
        });

        dropdown.addEventListener("mouseleave", () => {
            dropdownContent.style.opacity = "0";
            dropdownContent.style.transform = "translateY(-10px)";
            setTimeout(() => {
                dropdownContent.style.display = "none";
            }, 300);
        });
    });

    // 🔥 FEATURE TABS SWITCHING FUNCTIONALITY
    function openTab(event, tabName) {
        document.querySelectorAll(".tab-content").forEach(content => content.classList.add("hidden"));
        document.querySelectorAll(".tab-btn").forEach(button => button.classList.remove("active"));
        document.getElementById(tabName).classList.remove("hidden");
        event.currentTarget.classList.add("active");
    }

    document.querySelectorAll(".tab-btn").forEach(button => {
        button.addEventListener("click", event => openTab(event, button.getAttribute("data-tab")));
    });

    // 🔥 REDIRECT FUNCTIONALITY
    const addRedirect = (selector, url) => {
        const element = document.querySelector(selector);
        if (element) {
            element.addEventListener("click", () => window.location.href = url);
        }
    };

    addRedirect(".login", "login.html");
    addRedirect(".signup", "signup.html");
    addRedirect(".primary", "find-work.html");
    addRedirect(".secondary", "demo.html");

    // 🔥 ADDING SMOOTH FADE-IN ANIMATION ON PAGE LOAD
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.opacity = "1";
        document.body.style.transition = "opacity 0.5s ease-in-out";
    }, 100);

    // 🔥 SOCIAL LOGIN BUTTONS FUNCTIONALITY
    document.querySelectorAll(".social-login").forEach(button => {
        button.addEventListener("click", () => {
            alert(`Signing in with ${button.getAttribute("data-provider")}`);
        });
    });

    // 🔥 RENDER SOCIAL LOGIN BUTTONS
    const loginContainer = document.querySelector(".login-container");
    if (loginContainer) {
        loginContainer.innerHTML = `
            <h2>Sign in with</h2>
            <button class="social-login" data-provider="Google">🔵 Google</button>
            <button class="social-login" data-provider="Facebook">🔵 Facebook</button>
            <button class="social-login" data-provider="Twitter">🔵 Twitter</button>
            <button class="social-login" data-provider="Instagram">🔵 Instagram</button>
        `;
    }
});
