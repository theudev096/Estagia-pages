// Cole aqui o link compartilhável do arquivo no Google Drive.
// Exemplo: https://drive.google.com/file/d/ID_DO_ARQUIVO/view?usp=sharing
const DOWNLOAD_URL =
  "https://drive.google.com/file/d/1KAqYhMQTIqX7dyIUQ4SqkS68Z98P4trj/view?usp=drive_link";

const downloadLinks = document.querySelectorAll("[data-download]");
const downloadNote = document.querySelector("#download-note");

for (const link of downloadLinks) {
  if (DOWNLOAD_URL) {
    link.href = DOWNLOAD_URL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    continue;
  }

  link.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#download")?.scrollIntoView({ behavior: "smooth" });
    if (downloadNote) {
      downloadNote.textContent =
        "O endereço de download será adicionado assim que o link do Google Drive estiver disponível.";
    }
  });
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const revealElements = document.querySelectorAll("[data-reveal]");

if (reducedMotion.matches || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.18 },
  );

  revealElements.forEach((element) => observer.observe(element));
}
