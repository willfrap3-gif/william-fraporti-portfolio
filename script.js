// =========================
// CAMBIO DE TEMA
// =========================

const btn = document.getElementById("themeToggle");

if (btn) {

    btn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        btn.textContent =
            document.body.classList.contains("light")
            ? "🌙"
            : "☀";

    });

}

// =========================
// PARTICULAS
// =========================

const particlesContainer = document.getElementById("particles");

if (particlesContainer) {

    for (let i = 0; i < 100; i++) {

        const particle = document.createElement("div");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            (10 + Math.random() * 20) + "s";

        particle.style.animationDelay =
            (-Math.random() * 20) + "s";

        particle.style.opacity =
            0.1 + Math.random() * 0.5;

        particle.style.width =
            1 + Math.random() * 3 + "px";

        particle.style.height =
            particle.style.width;

        particlesContainer.appendChild(particle);

    }

}