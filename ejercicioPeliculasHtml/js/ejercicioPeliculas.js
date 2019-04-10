function guardarEnTabla () {
 var titulo = document.getElementsByName("titulo")[0].value;
 var director = document.getElementsByName("director")[0].value;
 var cod_id = document.getElementsByName("cod_id")[0].value;
 var genero = document.getElementsByName("genero")[0].value;
 var fecha_de_estreno = document.getElementsByName("fecha_de_estreno")[0].value;
 var valoracion = document.getElementsByName("valoracion")[0].value;

 var table = document.createElement("table");
 var tblBody = document.createElement("tbody");
 var fila = document.createElement("tr");
 for(i = 0; i<6; i++) {
     if (i==0) { var textoCelda= titulo;}
     if (i==1) { var textoCelda= director;}
     var celda = document.createElement("td");

 }

 fila.appendChild(celda);
 tblBody.appendChild(fila);
 tabla.appendChild(tblBody);

}
function mostrarContenidoDeCamposDeTexto(){
    var texto = document.getElementsByName("titulo")[0].value;
    console.log(texto[0])
    
}