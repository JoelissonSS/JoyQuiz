var primeira = [
    {ask: 'Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?', a1: ' Tem entre 2 a 4 litros. São retirados 450 mililitros', a2: 'Tem entre 4 a 6 litros. São retirados 450 mililitros', a3: 'Tem 10 litros. São retirados 2 litros', a4: 'Tem 7 litros. São retirados 1,5 litros' ,ans: 'Tem entre 4 a 6 litros. São retirados 450 mililitros'},
    {ask: 'De quem é a famosa frase “Penso, logo existo”?', a1: 'Platão', a2: 'Galileu Galilei', a3: 'Descartes', a4: 'Sócrates', ans: 'Descartes'},
    {ask: 'De onde é a invenção do chuveiro elétrico?', a1: 'França', a2: 'Inglaterra', a3: 'Brasil', a4: 'Austrália', ans: 'Brasil'},
    {ask: 'Quais o menor e o maior país do mundo?', a1: 'Vaticano e Rússia', a2: 'Nauru e China', a3: 'Mônaco e Canadá', a4: 'Malta e Estados Unidos', ans: 'Vaticano e Rússia'},
    {ask: 'Qual o nome do presidente do Brasil que ficou conhecido como Jango?', a1: 'Jânio Quadros', a2: 'Jacinto Anjos', a3: 'Getúlio Vargas', a4: 'João Goulart', ans: 'João Goulart'},
    {ask: 'Qual o grupo em que todas as palavras foram escritas corretamente?', a1: 'Asterístico, beneficiente, meteorologia, entertido', a2: 'Asterisco, beneficente, meteorologia, entretido', a3: 'Asterisco, beneficente, metereologia, entretido', a4: 'Asterístico, beneficiente, metereologia, entretido', ans: 'Asterisco, beneficente, meteorologia, entretido'},
    {ask: 'Qual o livro mais vendido no mundo a seguir à Bíblia?', a1: 'O Senhor dos Anéis', a2: 'Dom Quixote', a3: 'O Pequeno Príncipe', a4: 'Ela, a Feiticeira', ans: 'Dom Quixote'},
    {ask: 'Quantas casas decimais tem o número pi?', a1: 'Duas', a2: 'Centenas', a3: 'Infinitas', a4: 'Vinte', ans: 'Infinitas'},
    {ask: 'Atualmente, quantos elementos químicos a tabela periódica possui?', a1: '113', a2: '109', a3: '108', a4: '118', ans: '118'},
    {ask: 'Quais os países que têm a maior e a menor expectativa de vida do mundo?', a1: 'Japão e Serra Leoa', a2: 'Austrália e Afeganistão', a3: 'Itália e Chade', a4: 'Brasil e Congo', ans: 'Japão e Serra Leoa'},
    {ask: 'O que a palavra legend significa em português?', a1: 'Legenda', a2: 'Legendário', a3: 'Conto', a4: 'Lenda', ans: 'Lenda'},
    {ask: 'Qual o número mínimo de jogadores numa partida de futebol?', a1: '8', a2: '10', a3: '9', a4: '7', ans: '7'},
    {ask: 'Quais os principais autores do Barroco no Brasil?', a1: 'regório de Matos, Bento Teixeira e Manuel Botelho de Oliveira', a2: 'Miguel de Cervantes, Gregório de Matos e Danthe Alighieri', a3: 'Padre Antônio Vieira, Padre Manuel de Melo e Gregório de Matos', a4: 'Castro Alves, Bento Teixeira e Manuel Botelho de Oliveira', ans: 'regório de Matos, Bento Teixeira e Manuel Botelho de Oliveira'},
    {ask: 'Quais as duas datas que são comemoradas em novembro?', a1: 'Independência do Brasil e Dia da Bandeira', a2: 'Proclamação da República e Dia Nacional da Consciência Negra', a3: 'Dia do Médico e Dia de São Lucas', a4: 'Black Friday e Dia da Árvore', ans: 'Proclamação da República e Dia Nacional da Consciência Negra'},
    {ask: 'Quanto tempo a luz do Sol demora para chegar à Terra?', a1: '12 minutos', a2: '12 horas', a3: '8 minutos', a4: '12 horas', ans: '8 minutos'},
    {ask: 'Qual a tradução da frase “Fabiano cogió su saco antes de salir”?', a1: 'Fabiano coseu seu paletó antes de sair', a2: 'Fabiano fechou o saco antes de sair', a3: 'Fabiano pegou seu paletó antes de sair', a4: 'Fabiano cortou o saco antes de cair', ans: 'Fabiano pegou seu paletó antes de sair'},
    {ask: 'Qual a nacionalidade de Che Guevara?', a1: 'Cubana', a2: 'Argentina', a3: 'Peruana', a4: 'Panamenha', ans: 'Argentina'},
    {ask: 'Quais são os três predadores do reino animal reconhecidos pela habilidade de caçar em grupo, se camuflar para surpreender as presas e possuir sentidos apurados, respectivamente:', a1: 'Tubarão branco, crocodilo e sucuri', a2: 'Tigre, gavião e orca', a3: 'Hiena, urso branco e lobo cinzento', a4: 'Orca, onça e tarântula', ans: 'Hiena, urso branco e lobo cinzento'},
    {ask: 'Qual a altura da rede de vôlei nos jogos masculino e feminino?', a1: '2,4 para ambos', a2: '2,5 m e 2,0 m', a3: '2,45 m e 2,15 m', a4: '2,43 m e 2,24 m', ans: '2,43 m e 2,24 m'},
    {ask: 'Em que ordem surgiram os modelos atômicos?', a1: 'Dalton, Thomson, Rutherford, Rutherford-Bohr', a2: 'Thomson, Dalton, Rutherford, Rutherford-Bohr', a3: 'Rutherford-Bohr, Rutherford, Thomson, Dalton', a4: 'Dalton, Rutherford-Bohr, Thomson, Rutherford', ans: 'Dalton, Thomson, Rutherford, Rutherford-Bohr'},
    {ask: 'Qual personagem folclórico costuma ser agradado pelos caçadores com a oferta de fumo?', a1: 'Caipora', a2: 'Saci', a3: 'Lobisomem', a4: 'Boitatá', ans: 'Caipora'},
    {ask: 'Em que período da pré-história o fogo foi descoberto?', a1: 'Neolítico', a2: 'Paleolítico', a3: 'Idade dos Metais', a4: 'Período da Pedra Polida', ans: 'Paleolítico'},
    {ask: 'Qual das alternativas abaixo apenas contêm classes de palavras?', a1: 'Vogais, semivogais e consoantes', a2: 'Artigo, verbo transitivo e verbo intransitivo', a3: 'Fonologia, Morfologia e Sintaxe', a4: 'Substantivo, verbo e preposição', ans: 'Substantivo, verbo e preposição'},
    {ask: 'Qual a montanha mais alta do Brasil?', a1: 'Pico da Neblina', a2: 'Pico Paraná', a3: 'Monte Roraima', a4: 'Pico Maior de Friburgo', ans: 'Pico da Neblina'},
    {ask: 'Qual a velocidade da luz?', a1: '300 000 000 metros por segundo (m/s)', a2: '199 792 458 metros por segundo (m/s)', a3: '299 792 458 metros por segundo (m/s)', a4: '30 000 000 metros por segundo (m/s)', ans: '299 792 458 metros por segundo (m/s)'}
]
var i = 0
var perguntas = setPergs(i)
var pontos = 0
function setPergs(){
    let quizAtual = []
    for (let i = 0; i < 5; i++) {
        let iPergunta = primeira[Math.floor(Math.random() * primeira.length)]
        quizAtual.indexOf(iPergunta) === -1? quizAtual.push(iPergunta): i = i - 1
    }
    return quizAtual
}
function pickElements(e){
    ind = document.querySelector(e)
    a = ind.innerHTML
    return ind
} 
function setQuiz(){
    pickElements('#pergunta').innerHTML = (perguntas[i].ask)
    pickElements('#alt1').innerHTML = (perguntas[i].a1)
    pickElements('#alt2').innerHTML = (perguntas[i].a2)
    pickElements('#alt3').innerHTML = (perguntas[i].a3)
    pickElements('#alt4').innerHTML = (perguntas[i].a4)
}

function start(){
    setQuiz(i)
    return i
}
function confirmar(c, e){
    if (c === perguntas[i].ans){
        document.getElementById(e).style.backgroundColor = "#07d000"
        pontos =+ pontos + 1
    } else {
        document.getElementById(e).style.backgroundColor = "#ff0000"
    }
    setTimeout(function(){
        mudarperg()
    }, 500)
    setTimeout(function(){
        document.getElementById(e).style.backgroundColor = ' rgb(143, 85, 224)'
    },500)
}
function mudarperg(){
    i = i + 1
    i > 4? finalizar():setQuiz(i)
}
function finalizar(){
    pontuacao(pontos)
    var modal = document.getElementById("myModal")
    modal.style.display = "block"
}
function pontuacao(p){
    let poo = document.getElementById('pontuacao')
    if (p === 5){
        poo.innerHTML = p + ' acertos, Parabéns! Acertou todas.'
    } else if (p === 4){
        poo.innerHTML = p + ' acertos, só errou uma, parabéns!'
    } else if (p === 3){
        poo.innerText = p + ' acertos, está na media!'
    }
    else if (p <= 2){
        poo.innerHTML = p + ' acertos, na próxima você consegue mais!'
    }
}