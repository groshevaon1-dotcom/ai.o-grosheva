// Grosheva AI Lab — скрипт лендинга.

// Ссылки для «Связаться» — подставляются сюда, когда автор пришлёт (TG-личка, MAX, канал).
const LINKS = {
  telegram: "https://t.me/Grosheva_OlgaN",
  max:      "https://max.ru/u/f9LHodD0cOJEqqNsg-NeeEzYOMSU--Aa9Ji4hQRJXTvSeqilFYN9uu4QssY",
  channel:  "https://t.me/hackerprod",
  miniapp:  "https://t.me/Drop_chaos_bot",   // «Организатор Хаоса» — открывается ботом
};

// Бургер-меню (мобильное)
const header = document.querySelector(".site-header");
const burger = document.querySelector(".nav-burger");
if (burger && header) {
  burger.addEventListener("click", () => {
    const open = header.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  header.querySelectorAll(".nav a, .nav-drawer .nav__cta").forEach((a) =>
    a.addEventListener("click", () => {
      header.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    })
  );
}

// Логотип — всегда плавно наверх (липкая шапка мешает обычному якорю #top)
const logo = document.querySelector(".logo");
if (logo) logo.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll("[data-link]").forEach((el) => {
  const key = el.getAttribute("data-link");
  const url = LINKS[key];
  if (url) {
    el.setAttribute("href", url);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  } else {
    el.setAttribute("aria-disabled", "true");
    el.title = "Ссылка появится, когда пришлёшь адрес";
  }
});
