//henter ut el. fra html
let frm_bestilling = document.getElementById("frm_bestilling");
let fornavn = document.getElementById("fornavnet");
let etternavn = document.getElementById("etternavn");
let antPers = document.getElementById("antPersoner");
let tid = document.getElementById("tid");
let dato = document.getElementById("dato");
let email = document.getElementById("email");
let kvittering = document.getElementById("kvittering");

frm_bestilling.onsubmit=function(evt){
 //forhindrer at vi oppdaterer siden
    evt.preventDefault();

    kvittering.innerHTML = "Takk for din reservasjon! Sjekk om alt stemmer:"+"<br>"; 
    //printer ut alt
    kvittering.innerHTML +="Navnet for reservasjon: " + fornavn.value +" "+ etternavn.value+"<br>";
    kvittering.innerHTML +="Antall deltagere: " + antPers.value+"<br>";
    kvittering.innerHTML += "Ønsket tid: " + tid.value+"<br>";
    kvittering.innerHTML += "Ønsket dato: " + dato.value+"<br>";
    kvittering.innerHTML +="kontakt email: " + email.value+"<br>";
}

