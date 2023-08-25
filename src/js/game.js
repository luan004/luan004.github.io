import { getWord } from './word.js';

const word = getWord();
const wordL = word.split('');
$('input').attr('maxlength', word.length);

var wordUnderlined = '';
for (let i = 0; wordL.length > i; i++) {
    wordUnderlined += '_ ';
}

$('#word').html(`${wordUnderlined}`);

function check(tried) {
    const triedL = tried.split('');
    let tent = '';
    for (let i = 0; i < word.length; i++) {
        if (wordL[i] == triedL[i]) {
            tent += wordL[i] + ' ';
        } else {
            tent += '_ ';
        }
    }
    return tent;
}

var dica = 0;
$('#dica').click(function () {
    if (dica < 3) {
        const sorted = Math.floor(Math.random() * word.length);
    
        let tent = '';
        for (let i = 0; i < word.length; i++) {
            if (i == sorted) {
                tent += wordL[i] + ' ';
            } else {
                tent += '_ ';
            }
        }
        $('#card').append(`<h3>${tent}</h3>`);
        dica++;
        $('#numdica').html(`${dica}`);
    }
});

$('form').submit(function (e) {
    e.preventDefault();

    const tried = $('form input').val();
    if (tried.length == word.length) {
        const tent = check(tried);

        if (tent != wordUnderlined && tent.replace(/ /g, '') != word) {
            $('#card').append(`<h3>${tent}</h3>`);
        }

        if (tent.replace(/ /g, '') == word) {
            $('#card').append(`<h2><i class="fa fa-star" style="margin-right:15px"></i>${tent.trim()}<i class="fa fa-star" style="margin-left:15px"></h2>`);
            $('#card').append(`<h3>Parabéns, você acertou!</h3>`);
        }
        $('form input').val('');
    }
});