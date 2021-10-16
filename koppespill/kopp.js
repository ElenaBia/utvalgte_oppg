//lager variabler
let kopp1 = document.getElementById("bilde1");
let kopp2 = document.getElementById("bilde2");
let kopp3 = document.getElementById("bilde3");
//let bland = document.getElementById("bland");
//let p_resultat = document.getElementById("p_resultat");
//let endeligResultat = document.getElementById("endeligResultat");
 

//Variabler for hvor mynten er
let NyPlass = plasserMynt(); //legger mynten bak en tilfeldig kopp
forslag = 0; //startsverdi: representerer hvilket kopp brukeren tok


//hvilke funksjon som aktiveres når vi trykker på koppene
kopp1.addEventListener("click", gjett);
kopp2.addEventListener("click", gjett);
kopp3.addEventListener("click", gjett);


//hvordan ting ser ut når vi starter
kopp1.src = "bilder/kopp.png";
kopp2.src = "bilder/kopp.png";
kopp3.src = "bilder/kopp.png";

//Variabel som hjelper oss videre i tilfeldigheten
function plasserMynt() {
	var tilfeldig = Math.floor((Math.random()*3)+1);
	return tilfeldig;
}



function gjett(evt){
    let knapp = evt.target;
    var koppValgt = knapp.getAttribute("data-kopp"); // returnerer kopp1, kopp2 eller kopp3
	console.log("Du valgte: " + koppValgt);
    // Sjekkar på data-kopp-attrbuttet satt i HTML
	if(koppValgt === "kopp1") {
		forslag = 1;
	}
	else if(koppValgt === "kopp2") {
		forslag = 2;
	}
	else {
		forslag = 3;
	}
	
	NyPlass = plasserMynt(); // Legg premien bak ein ny tilfeldig kopp
}

function f_tilbakeTilKoppOgOriginalTekst() {
	kopp1.src = "bilder/kopp.png";
	kopp2.src = "bilder/kopp.png";
	kopp3.src = "bilder/kopp.png";

}

// Gjer at tilbakemeldinga om resultat forsvinn igjen etter nokre sekund, både mynten under koppen og teksten under.
setTimeout(f_tilbakeTilKoppOgOriginalTekst, 2000);