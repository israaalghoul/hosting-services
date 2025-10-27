document.addEventListener("click", function (event) {
  if (event.target.classList.contains("line")) {
    const itemsInRow = event.target.parentNode.querySelectorAll(".line");
    itemsInRow.forEach((item) => item.classList.remove("active"));

    event.target.classList.add("active");
  }
});
// swiper
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    // loopFillGroupWithBlank: true,
    observer: true,
    observeParents: true,
    parallax: true,
    // freeMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

  // Subscription
  const monthlyBtn = document.getElementById("option1");
  const yearlyBtn = document.getElementById("option2");
  const cardsMonthly = document.getElementById("pills-month-tabContent");
  const cardsYearly = document.getElementById("pills-year-tabContent");
  const lineMonthly = document.getElementById("pills-month-tab");
  const lineYearly = document.getElementById("pills-year-tab");

  monthlyBtn.addEventListener("click", () => {
    cardsMonthly.classList.remove("d-none");
    cardsYearly.classList.add("d-none");
    lineMonthly.classList.remove("d-none");
    lineYearly.classList.add("d-none");
  });
  yearlyBtn.addEventListener("click", () => {
    cardsYearly.classList.remove("d-none");
    cardsMonthly.classList.add("d-none");
    lineYearly.classList.remove("d-none");
    lineMonthly.classList.add("d-none");
  });

  const translations = {
    en: {
      ourServices: "Our Services",
      about: "About",
      blogNews: "Blog & News",
      contact: "Contact",
      account: "Account",
      language: "EN",
    },
    ar: {
      ourServices: "خدماتنا",
      about: "حول",
      blogNews: "المدونة والأخبار",
      contact: "الاتصال",
      account: "الحساب",
      language: "AR",
    },
  };

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    // language btn
    const langBtn = document.querySelector(".language");
    if (langBtn) langBtn.textContent = translations[lang].language;
    // txt nav
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link[data-key]");
   navLinks.forEach((link) => {
    const key = link.getAttribute("data-key");
    link.textContent = translations[lang][key];
  });
    // set in localstorage
    localStorage.setItem("site-lang", lang);
  }

  // language btn
  const langBtn = document.querySelector(".language");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      const current = document.documentElement.lang;
      const next = current === "ar" ? "en" : "ar";
      setLanguage(next);
    });
  }

  const savedLang = localStorage.getItem("site-lang") || "en";
  setLanguage(savedLang);
});
