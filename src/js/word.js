export function getWord() {
    const data = 'casa carro cachorro gato rato objeto pessoa lugar coisa amigo livro computador cafe tempo crianca escola familia musica cidade jardim filme natureza trabalho agua beleza saude sorriso coracao sonho ceu estrela mar montanha praia floresta fogo terra vento chuva neve sol lua universo amor odio felicidade tristeza alegria medo cor nuvem maca laranja banana abacaxi morango uva limao chocolate pizza sorvete bolo carroca aviao navio bicicleta trem cavalo leao tigre elefante girafa zebra passaro borboleta abelha formiga peixe tubarao golfinho sapato chapeu camisa calca vestido relogio anel colar oculos dinheiro carteira celular chave casa chaveiro vela espelho quadro porta janela chuveiro cama sofa mesa cadeira comida bebida arvore flor planta pedra rio lago oceano deserto montanha floresta cidade pais continente planeta lua estrela galaxia';
    const words = getWords(data);
    const word = words[Math.floor(Math.random() * words.length)];
    return word;
}

function getWords(data) {
    data = data.replace(/(\r\n|\n|\r)/gm, '');
    data = data.toLowerCase();
    data = data.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    const words = data.split(' ');
    return words;
}