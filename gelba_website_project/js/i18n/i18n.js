/* ReqI5 */
(function initI18n() {
    const elements = document.querySelectorAll("[data-i18n]");
    if (elements.length === 0) return;

    /* ReqI6 */
    fetch("js/i18n/translations.json")
        .then(res => res.json())
        .then(data => {
            window.translations = data;

            let savedLang = localStorage.getItem("lang") || "en";
            switchLanguage(savedLang);
        });
})();

/* ReqI3 */
function applyTranslations(locale) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");

        if (translations[locale] && translations[locale][key]) {
            el.textContent = translations[locale][key];
        }
    });
}

/* ReqI4 */
function switchLanguage(locale) {
    localStorage.setItem("lang", locale);

    applyTranslations(locale);
    applyDateFormat(locale);
    applyPriceFormat(locale);
    applyNumberFormat(locale);
}

/* ReqI8 */
function applyDateFormat(locale) {
    const formatter = new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-GB");

    document.querySelectorAll("[data-date]").forEach(el => {
        el.textContent = formatter.format(new Date(el.dataset.date));
    });
}

/* ReqI9 */
function applyPriceFormat(locale) {
    const formatter = new Intl.NumberFormat(locale === "es" ? "es-ES" : "en-GB", {
        style: "currency",
        currency: locale === "es" ? "EUR" : "GBP"
    });

    document.querySelectorAll("[data-price]").forEach(el => {
        el.textContent = formatter.format(el.dataset.price);
    });
}

/* ReqI10 */
function applyNumberFormat(locale) {
    const numberFormatter = new Intl.NumberFormat(locale);
    const percentFormatter = new Intl.NumberFormat(locale, { style: "percent" });

    document.querySelectorAll("[data-number]").forEach(el => {
        el.textContent = numberFormatter.format(el.dataset.number);
    });

    document.querySelectorAll("[data-percentage]").forEach(el => {
        el.textContent = percentFormatter.format(el.dataset.percentage);
    });
}