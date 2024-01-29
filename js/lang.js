let lang = getCookie('lang');

if (lang == undefined) {
    lang = 'pt-br';
    document.cookie = "lang=" + lang + "; path=/";
}

loadLang(lang);

function loadLang(lang) {
    let page = window.location.pathname.split('/').pop();
    
    switch (page) {
        case '':
            indexLang(lang);
            break;
        case 'redesocial':
            redesocialLang(lang);
            break;
        case 'store':
            storeLang(lang);
            break;
    }
}

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

/*
    /INDEX LANGUAGE
*/
function indexLang(lang) {
    $.getJSON('js/language/' + lang + '.json', function (json) {
        /* NAV */
        $('#nav-aboutme').text(json.nav.about);
        $('#nav-portfolio').text(json.nav.portfolio);
        $('#nav-language').text(json.nav.language);

        /* FACE */
        $('#face-subtitle').text(json.face.subtitle);

        /* ABOUT ME */
        $('#aboutme-title').text(json.aboutme.title);
        $('#aboutme-text').html(json.aboutme.text);

        /* EDUCATION */
        $('#education-title').text(json.education.title);

        $('#education-bs-title').text(json.education.bs.title);
        $('#education-bs-text').html(json.education.bs.text);

        $('#education-it-title').text(json.education.it.title);
        $('#education-it-text').html(json.education.it.text);

        /* COURSES */
        $('#courses-title').text(json.courses.title);

        $('#courses-cs50-title').text(json.courses.cs50.title);
        $('#courses-cs50-text').html(json.courses.cs50.text);

        $('#courses-network-title').text(json.courses.network.title);
        $('#courses-network-text').html(json.courses.network.text);

        $('#courses-linux-title').text(json.courses.linux.title);
        $('#courses-linux-text').html(json.courses.linux.text);

        /* PORTFOLIO */
        $('#portfolio-title').text(json.portfolio.title);

        $('#redesocial-title').text(json.portfolio.redesocial.title);
        $('#redesocial-text').html(json.portfolio.redesocial.text);
        $('#redesocial-button').text(json.portfolio.redesocial.button);

        $('#store-title').text(json.portfolio.store.title);
        $('#store-text').html(json.portfolio.store.text);
        $('#store-button').text(json.portfolio.store.button);

        /* FOOTER */
        $('#footer-button').text(json.footer.button);
        $('#footer-text').html(json.footer.text);
    });
}

/* 
    /PORTFOLIO/REDESOCIAL
*/
function redesocialLang(lang) {
    $.getJSON('../js/language/' + lang + '.json', function (json) {
        /* NAV */
        $('#nav-aboutme').text(json.nav.about);
        $('#nav-portfolio').text(json.nav.portfolio);
        $('#nav-language').text(json.nav.language);

        /* ARTICLE */
        $('#article-title').text(json.redesocial.title);
        $('#article-text').html(json.redesocial.text);
        $('#article-document').text(json.redesocial.buttons.document);
        $('#article-github').text(json.redesocial.buttons.github);

        /* FOOTER */
        $('#footer-button').text(json.footer.button);
        $('#footer-text').html(json.footer.text);
    });
}

/* 
    /PORTFOLIO/STORE
*/
function storeLang(lang) {
    $.getJSON('../js/language/' + lang + '.json', function (json) {
        /* NAV */
        $('#nav-aboutme').text(json.nav.about);
        $('#nav-portfolio').text(json.nav.portfolio);
        $('#nav-language').text(json.nav.language);

        /* ARTICLE */
        $('#article-title').text(json.store.title);
        $('#article-text').html(json.store.text);
        $('#article-github').text(json.store.buttons.github);

        /* FOOTER */
        $('#footer-button').text(json.footer.button);
        $('#footer-text').html(json.footer.text);
    });
}