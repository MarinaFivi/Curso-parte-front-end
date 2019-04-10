function inicializar () {
    var elemenH1 = Document.createElement('h1');
var textH1 = Document.createTextNode("Un título");
elemenH1.appendChild(textH1);
var body =document.body;
body.appendChild(elemenH1);
}