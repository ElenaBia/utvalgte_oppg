/* -------------------------------------

        første eksempel  

-----------------------------------------*/

let test_btn = document.getElementById("btn_test");

/*når du trykker på knappen så skal en funksjon aktiveres
Når vi trykker på kanppen, kaller vi det for "målet for hendelsen" = evt.target
klikket setter i gang en hendelsesstyrt funksjon

event er

For å få info som finnes inni knappen vi trykker,
 må vi bruke hendelsen ("evt") inni parameteren.*/
test_btn.onclick = function(evt){
    let KnappStartFunksjon = evt.target; //Referer til knappen som blir trykket
    console.log("ID: " + KnappStartFunksjon.id); //Viser til attributtet id til knappen
    console.log("innerHtml: " + KnappStartFunksjon.innerHTML); 
}


/* -------------------------------------

        Andre eksempel  

-----------------------------------------*/


let btn_1 = document.getElementById("btn_1");
let btn_2 = document.getElementById("btn_2");

function visInfo(evt){ //Hendelsen som starter funksjonen er en parameter

    let knapp = evt.target; //Refererer til knappen du trykket på
    alert("Du klikket på knappen med id-en: " + knapp.id); //viser id til knappen
}
btn_1.onclick = visInfo; //Knytter btn_1 til funksjonen visInfo
btn_2.onclick = visInfo; //Knytter btn_2 til funksjonen visInfo

/* -------------------------------------

        Tredje eksempel  

-----------------------------------------*/

let btn_katt = document.getElementById("btn_katt");

let bilde = document.getElementById("bilde");
let lyd = document.getElementById("lyd");

function visBilde(evt){
    //console.log("hei");
    let knapp = evt.target; //Referanse til knappen som ble trykket på
    let bildefil = knapp.getAttribute("data-bilde");//Navn på bildefilen
    let lydfil = knapp.getAttribute("data-lyd"); //Navn på lydfil
    bilde.src = bildefil; // setter bildefilen som src i img-element
    lyd.src = lydfil; //setter lydfil som src i audio-element
    lyd.play();//spiller av lyden
}

btn_katt.onclick = visBilde;
