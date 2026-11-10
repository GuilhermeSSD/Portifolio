"use strict";
const projects = [
  {
    n: "01",
    title: "Clássica Academy",
    category: "Educação & música",
    image: "classica.jpg",
    cls: "classica",
    desc: "Uma plataforma para dar os primeiros passos na música clássica. Cursos, quizzes e uma dashboard para acompanhar a evolução no aprendizado.",
    tags: ["JavaScript", "Node.js", "SQL", "Chart.js"],
    url: "https://github.com/GuilhermeSSD/Classica-Academy",
    detail:
      "Projeto individual acadêmico com cadastro e login, cursos de instrumentos de cordas, avaliação por quizzes e histórico de desempenho. Integra interface, servidor e banco de dados.",
  },
  {
    n: "02",
    title: "Smart Waste Monitor",
    category: "Monitoramento & dados",
    image: "smart-waste.png",
    cls: "waste",
    desc: "Tecnologia aplicada à gestão de resíduos. Monitoramento de volume com sensores para apoiar o controle e o planejamento das coletas.",
    tags: ["JavaScript", "Sensores", "Dashboard"],
    url: "https://github.com/Smart-Waste-Monitor",
    detail:
      "Projeto acadêmico em equipe voltado ao gerenciamento inteligente de resíduos. A proposta conecta sensores de volume a um sistema de acompanhamento para evitar coletas desnecessárias.",
  },
  {
    n: "03",
    title: "HambuGui",
    category: "Web & pedidos",
    image: "hambugui.png",
    cls: "burger",
    desc: "Uma experiência web para realização de pedidos. Um projeto de desenvolvimento de interface aplicado ao universo de uma hamburgueria.",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/GuilhermeSSD/HambuGui",
    detail:
      "Site para realização de pedidos de uma hamburgueria. Projeto de interface web construído com HTML, CSS e JavaScript.",
  },
];
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  nav.classList.toggle("open", open);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
  }),
);
const dialog = document.querySelector("#project-dialog");
document.querySelectorAll("[data-project]").forEach((b) =>
  b.addEventListener("click", () => {
    const p = projects[Number(b.dataset.project)];
    document.querySelector("#dialog-title").textContent = p.title;
    document.querySelector("#dialog-category").textContent = p.category;
    document.querySelector("#dialog-description").textContent = p.detail;
    document.querySelector("#dialog-link").href = p.url;
    dialog.showModal();
  }),
);
document
  .querySelector(".close-dialog")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      dialog.close();
  }
});
document.querySelector("#year").textContent = new Date().getFullYear();
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          nav.querySelectorAll("a").forEach((a) => {
            const active = a.hash === "#" + e.target.id;
            a.classList.toggle("active", active);
            if (active) a.setAttribute("aria-current", "location");
            else a.removeAttribute("aria-current");
          });
        }
      }),
    { rootMargin: "-20% 0px -60% 0px" },
  );
  document
    .querySelectorAll("main section[id]")
    .forEach((s) => observer.observe(s));
}
