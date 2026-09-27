// Grosheva AI Lab — скрипт лендинга.

// Ссылки для «Связаться» — подставляются сюда, когда автор пришлёт (TG-личка, MAX, канал).
const LINKS = {
  telegram: "https://t.me/Grosheva_OlgaN",
  max:      "https://max.ru/u/f9LHodD0cOJEqqNsg-NeeEzYOMSU--Aa9Ji4hQRJXTvSeqilFYN9uu4QssY",
  channel:  "https://t.me/hackerprod",
  miniapp:  "https://t.me/Drop_chaos_bot",   // «Организатор Хаоса» — открывается ботом
};

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
