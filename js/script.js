let page = window.location.pathname.split('/').pop();

window.addEventListener('scroll', function () {
    const header = document.querySelector('.header-content');
    const arrow = document.querySelector('.arrow');

    if (window.scrollY > 50) {
        header.classList.remove('transparent');
        if (page === '' && arrow) {
            arrow.classList.add('transparent');
        }
    } else {
        header.classList.add('transparent');
        if (page === '' && arrow) {
            arrow.classList.remove('transparent');
        }
    }
});

function getCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function (el) {
        let [k, v] = el.split('=');
        cookie[k.trim()] = v;
    })
    return cookie[name];
}

function setLang(lang) {
    document.cookie = "lang=" + lang + "; path=/";
    location.reload();
}



window.addEventListener('load', function () {
    let lang = getCookie('lang');

    if (lang == undefined) {
        lang = 'pt-br';
        document.cookie = "lang=" + lang + "; path=/";
    }

    loadLang(lang);
})

async function loadLang(lang) {
    try {
        const page = window.location.pathname.split('/').pop();
        const basePath = page === '' ? 'js/language/' : '../js/language/';
        
        const response = await fetch(`${basePath}${lang}.json`);
        const json = await response.json();

        const elements = document.querySelectorAll('[id^="lang-"]');

        elements.forEach(el => {
            const path = el.id.replace('lang-', '').split('-');
            
            let value = json;

            for (let key of path) {
                if (value[key] !== undefined) {
                    value = value[key];
                } else {
                    value = null;
                    break;
                }
            }

            if (value !== null) {
                el.innerHTML = value;
            }
        });
    } catch (error) {
        console.error('Erro ao carregar arquivo de localização', error);
    }
}