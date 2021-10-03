
// pegando dados da tela usando JAVASCRIP PURO
var teste = document.getElementById("botao");

teste.onclick = function () {
    alert("botao pressionado -->   " + $('#botao').html());
};

$("#botao").click(function () {
    $("#texto").hide();
});

// pegando dados da tela usando JQUERY
var texto = $('#texto').html();
console.log(texto);


//Inserindo mais dados no DOM com Jquery
$('#texto').append(' <p id="testenovo">TExto adicionado através do append</p>');
console.log($('#testenovo').html());


//Pegando dados da tela com .CLASS
var pegarTexto = $('.display-4').html();
console.log(pegarTexto);


//Adicionando após
$('.display-4').after('<p> Texto adicionado após o título através de JQUERY == after</p>');

//Função de clique no Título da Pagina
var contador = 0;
$('.display-4').click(
    function () {
        contador = contador + 1;

        alert(pegarTexto + " foi clicado " + contador + " vezes");

        //  Este comando abaixo remove
        //$("#segundaLinha").remove();

        let input = window.prompt("Um simples Input para adicionar dado na segunda DIV");
        console.log(input);
        $("#segundaLinha").first().html(input);
    }
);

///   Before == antes     e After == Depois

$("#segundaLinha").before('<h5> texto da segunda DIV adicionado antes </h5> ');

// Aqui abaixo acionamos quando o conteúdo é totlamente carregado
window.onload = function () { alert("Alerta do window.load, dizendo que a estará a ser carregada.") }


// para acionarmos o evento ates da página ser totalmente carregada usaríamos:
// $(document).read(alert("Antes do documento ser carregado"));
// foi abreviado por:

$(function () {
    alert(" Jquery abreviado ");
});

//Evento do CLick
var item = 0;
$('ul').on('click', 'li',
    function () {
        item = item + 1;
        $(this).after('<li>Adicionado item ' + item + '</li>');
        console.log("foi clicado  em: " + $(this).text());

    });

/// Capturando dados do Teclado
$("#inpt").keypress(
    function (event) {

        console.log("A tecla pressionada foi: " + event.which);
        $("#teclacapturada").append(event.which + " , ");
    });

$("#limparTeclado").on('click',
    function () { $("#teclacapturada").html('') });


//----------------------------------TRABALHANDO COM AJAX -----------------------------//