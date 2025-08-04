const translations = {
    en: {
        portfolioTitle: "QA Engineer Portfolio",
        aboutMe: "About Me",
        projects: "Projects",
        contact: "Contact",
        aboutText: "Experienced QA Engineer with a focus on automated testing and quality assurance processes. Specialized in web application testing and test documentation.",
        project1Title: "127 ZBIR",
        project1Desc: "Website for the 127th Separate Brigade of the Territorial Defense Forces of Kharkiv. Full functionality testing was conducted.",
        project2Title: "Donation Baza",
        project2Desc: "A platform for collecting donations. Testing of the payment system and user scenarios was performed.",
        project3Title: "Baza CRM",
        project3Desc: "CRM system for project management. Comprehensive testing of functionality and API was conducted.",
        project4Title: "Peaceful Warrior Foundation",
        project4Desc: "Website for the Peaceful Warrior Foundation. Performed responsive and cross-browser testing.",
        project5Title: "Baza Skill",
        project5Desc: "Website for trainees. Testing of registration, authorization, and main functionality was conducted.",
        visitProject: "Visit Project",
    },
    cs: {
        portfolioTitle: "Portfolio QA Inženýra",
        aboutMe: "O mně",
        projects: "Projekty",
        contact: "Kontakt",
        aboutText: "Zkušený QA inženýr se zaměřením na automatizované testování a procesy zajištění kvality. Specializace na testování webových aplikací a testovací dokumentaci.",
        project1Title: "127 ZBIR",
        project1Desc: "Webové stránky pro 127. samostatnou brigádu Sil územní obrany Charkova. Bylo provedeno úplné testování funkčnosti.",
        project2Title: "Donation Baza",
        project2Desc: "Platforma pro sběr darů. Bylo provedeno testování platebního systému a uživatelských scénářů.",
        project3Title: "Baza CRM",
        project3Desc: "CRM systém pro řízení projektů. Bylo provedeno komplexní testování funkčnosti a API.",
        project4Title: "Peaceful Warrior Foundation",
        project4Desc: "Webové stránky pro nadaci Peaceful Warrior. Provedeno responzivní a cross-browser testování.",
        project5Title: "Baza Skill",
        project5Desc: "Webové stránky pro stážisty. Bylo provedeno testování registrace, autorizace a hlavní funkčnosti.",
        visitProject: "Navštívit projekt",
    },
    uk: {
        portfolioTitle: "Портфоліо QA Інженера",
        aboutMe: "Про мене",
        projects: "Проекти",
        contact: "Контакти",
        aboutText: "Досвідчений QA інженер з фокусом на автоматизованому тестуванні та процесах забезпечення якості. Спеціалізуюся на тестуванні веб-додатків та тестовій документації.",
        project1Title: "127 ЗБІР",
        project1Desc: "Сайт для 127-ї окремої бригади ТРО міста Харкова. Проведено повне тестування функціоналу.",
        project2Title: "Donation Baza",
        project2Desc: "Платформа для збору пожертв. Виконано тестування платіжної системи та користувацьких сценаріїв.",
        project3Title: "Baza CRM",
        project3Desc: "CRM система для управління проектами. Проведено комплексне тестування функціоналу та API.",
        project4Title: "Peaceful Warrior Foundation",
        project4Desc: "Веб-сайт для фонду Peaceful Warrior Foundation. Виконано тестування адаптивності та крос-браузерне тестування.",
        project5Title: "Baza Skill",
        project5Desc: "Веб-сайт для trainee. Проведено тестування реєстрації, авторизації та основного функціоналу.",
        visitProject: "Відвідати проект",
    },
    ru: {
        portfolioTitle: "Портфолио QA Инженера",
        aboutMe: "Обо мне",
        projects: "Проекты",
        contact: "Контакты",
        aboutText: "Опытный QA инженер с фокусом на автоматизированном тестировании и процессах обеспечения качества. Специализируюсь на тестировании веб-приложений и тестовой документации.",
        project1Title: "127 СБОР",
        project1Desc: "Сайт для 127-й отдельной бригады ТРО города Харькова. Проведено полное тестирование функционала.",
        project2Title: "Donation Baza",
        project2Desc: "Платформа для сбора пожертвований. Выполнено тестирование платежной системы и пользовательских сценариев.",
        project3Title: "Baza CRM",
        project3Desc: "CRM система для управления проектами. Проведено комплексное тестирование функционала и API.",
        project4Title: "Peaceful Warrior Foundation",
        project4Desc: "Веб-сайт для фонда Peaceful Warrior Foundation. Выполнено тестирование адаптивности и кросс-браузерное тестирование.",
        project5Title: "Baza Skill",
        project5Desc: "Веб-сайт для trainee. Проведено тестирование регистрации, авторизации и основного функционала.",
        visitProject: "Посетить проект",
    }
};

function showTab(event, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('bg-brand-purple', 'text-brand-light', 'shadow-volumetric-active', '-translate-y-1');
        button.classList.add('shadow-volumetric');
    });

    document.getElementById(tabName).style.display = 'block';

    const activeButton = event.currentTarget;
    activeButton.classList.add('bg-brand-purple', 'text-brand-light', 'shadow-volumetric-active', '-translate-y-1');
    activeButton.classList.remove('shadow-volumetric');
}

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    document.getElementById('current-lang').textContent = lang.toUpperCase();
    document.getElementById('lang-dropdown').classList.add('hidden');
    // Also update the main title
    document.getElementById('portfolio-title').textContent = translations[lang].portfolioTitle;
}

document.addEventListener('DOMContentLoaded', function() {
    const initialActiveButton = document.querySelector('.tab-button');
    if (initialActiveButton) {
        showTab({ currentTarget: initialActiveButton }, 'about');
    }

    const langButton = document.getElementById('lang-button');
    const langDropdown = document.getElementById('lang-dropdown');
    langButton.addEventListener('click', () => {
        langDropdown.classList.toggle('hidden');
    });

    // Hide dropdown if clicked outside
    document.addEventListener('click', function(event) {
        const langSwitcher = document.getElementById('lang-switcher');
        if (!langSwitcher.contains(event.target)) {
            langDropdown.classList.add('hidden');
        }
    });

    // Set initial language
    changeLanguage('en');
});
