function chamaFuncaoComeco() {
    starCronometro();

    getData();
}

function chamaFuncaoFim() {


    getData();
}

//Variaveis para CRONOMETRO
var sHors = "0"+0;
var sMins = "0"+0;
var sSecs = -1;

function starCronometro(){
    sSecs++;
    if(sSecs==60){sSecs=0;sMins++;
        if(sMins<=9)sMins="0"+sMins;
    }
    if(sMins==60){sMins="0"+0;sHors++;
        if(sHors<=9)sHors="0"+sHors;
    }
    if(sSecs<=9)sSecs="0"+sSecs;
    cronometro.innerHTML=sHors+"<font color=#000000>:</font>"+sMins+"<font color=#000000>:</font>"+sSecs;
    setTimeout('starCronometro()',1000);

    if(sMins > 1) {
        cronometroMsg.innerHTML = ("Você esgotou o seu interbalo");
    }

}

//Variaveis para Pegar DATA/HORA
var ano, mes, dia, hora, min, seg;

function getData() {
    datahora = new Date();

    ano = datahora.getFullYear();
    mes = datahora.getMonth();
    dia = datahora.getDate();
    hora = datahora.getHours();
    min = datahora.getMinutes();
    seg = datahora.getSeconds();

}

var clic = false;
var blocDiv = null;

function mostraDiv(id) {
    document.getElementById(id).style.display = "block";
    clic = true;
    document.getElementById(blocDiv).style.display = "none";

}

function mostraOutraDiv(id) {
    if (clic == false){
        document.getElementById(id).style.display = "block";
    }
    blocDiv = id;
}