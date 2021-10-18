// lager variabler fra html elementene vi skal manipulere

//knapp for å starte på nytt
var SpillIgjen = document.getElementById("SpillIgjen");
var p_åpningsbeskjed = document.getElementById("p_åpningsbeskjed");

//koppene som vi bruker
var kopp1 = document.getElementById("kopp1");
var kopp2 = document.getElementById("kopp2");
var kopp3 = document.getElementById("kopp3");

//Antall forsøk brukeren har
var AntForsok = document.getElementById("AntForsok");

// Sier om du valgte rett/feil
var p_resultatUt = document.getElementById("p_resultatUt");
//Viser din score på slutten
var EndeligResultat = document.getElementById("EndeligResultat");


//definerer noen startsverdier
antForsok = 0;
totaltAntForsok = 5;
forslag = 0;
SpillIgjen.style.visibility = "hidden";
kopp1.src = "bilder/kopp.png";
kopp2.src = "bilder/kopp.png";
kopp3.src = "bilder/kopp.png";

//fargen på tilbakemeldingen skifter etterhvert farge
p_resultatUt.style.backgroundColor = "whitesmoke";
p_resultatUt.style.color = "black";

//Den holder tellingen på antall rett/gal
tabResultat = [];

//funksjon som plasserer mynten et tilfeldig sted
liggBak = f_plasserMynt(); // Legg premien bak ein ny tilfeldig kopp



// Funksjonene som aktiveres når man klikker på bildene og knappen
SpillIgjen.addEventListener("click", f_spillIgjen);
kopp1.addEventListener("click", f_gjettKopp);
kopp2.addEventListener("click", f_gjettKopp);
kopp3.addEventListener("click", f_gjettKopp);

//restarter spillet
function f_spillIgjen(){
	location.reload();
}




//
AntForsok.innerHTML = (totaltAntForsok-antForsok) + " forsøk igjen.";
p_åpningsbeskjed.innerHTML = "Bak kva kopp trur du det ligg ein mynt? Du har " + totaltAntForsok + " forsøk på å gjette deg fram til dette. Har du flaks?";


// Genererer ein plassering for mynten, som indikerer om det ligg bak kopp 1, 2 eller 3
function f_plasserMynt() {
	// Genererer eit tilfeldig tal mellom 1 og 3 og returnerer det deretter
	var tilfeldig = Math.floor((Math.random()*3)+1);
	return tilfeldig;
}

// Funksjon som setter gjettingen til brukaren til variabelen forslag, og deretter kallar på funksjonen som sjekkar resultatet.
function f_gjettKopp(evt) {
	var knapp = evt.target;
	console.log(evt.target);
	var koppValgt = knapp.getAttribute("data-kopp"); // returnerer kopp1, kopp2 eller kopp3, sjå HTML linje 13-15
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
	
	liggBak = f_plasserMynt(); // Legg premien bak ein ny tilfeldig kopp

	// Sjekkar resultat
	f_resultat();
}

// Testar om den koppen brukaren har valgt er den korrekte.
// Gjer og tilbakemelding om det er nært eller langt frå.
function f_resultat() {
	// Testar om ein har fleire forsøk igjen
	if(antForsok<totaltAntForsok) {
		// Tester om resultatet er riktig og gjer tilbakemelding
		if(forslag === liggBak) {
			p_resultatUt.innerHTML = "Gratulerar!";
			tabResultat[antForsok] = 1;
			// Plasserer mynt
			if(liggBak===1 && forslag===1) {
				kopp1.src = "bilder/mynt.png";
				}
				else if(liggBak===2 && forslag===2) {
					kopp2.src = "bilder/mynt.png";
				} else if(liggBak===3 && forslag===3) {
					kopp3.src = "bilder/mynt.png";
				}
				else {
					console.log("Mynten blei ikkje plassert nokon plass.");
				}
				p_resultatUt.style.backgroundColor = "green";
				p_resultatUt.style.color = "white";
		}
		// Dersom det er feil
		else {
			p_resultatUt.innerHTML = "Feil!";
			p_resultatUt.style.backgroundColor = "red";
			p_resultatUt.style.color = "white";
			tabResultat[antForsok] = 0;
		}
		antForsok++;
		AntForsok.innerHTML = "Forsøk " + antForsok + ". " + (totaltAntForsok-antForsok) + " forsøk igjen.";
		

		// Gjer at tilbakemeldinga om resultat forsvinn igjen etter nokre sekund, både mynten under koppen og teksten under.
		setTimeout(f_tilbakeTilKoppOgOriginalTekst, 2000);
	}
	// Dersom ein ikkje har fleire forsøk igjen
	else {
		// Dette blir handtert av if-setninga nedanfor
	}
}

// Tilbakestiller visuelt sett, frå mynt til kopp og teksten under. Blir brukt for å ha ein midlertidig visning av mynten under koppen.
function f_tilbakeTilKoppOgOriginalTekst() {
	kopp1.src = "bilder/kopp.png";
	kopp2.src = "bilder/kopp.png";
	kopp3.src = "bilder/kopp.png";

	p_resultatUt.innerHTML = "Trykk på den koppen der du trur mynten ligg!";
	p_resultatUt.style.backgroundColor = "whitesmoke";
	p_resultatUt.style.color = "black";

	// Avsluttar spelet når ein ikkje har fleire forsøk igjen
	if(antForsok===totaltAntForsok) {
		p_resultatUt.style.backgroundColor = "yellow";
		p_resultatUt.style.color = "black";
		p_resultatUt.innerHTML = "Du har ikkje fleire forsøk igjen! Start spelet på nytt.";
		SpillIgjen.style.visibility = "visible";
		EndeligResultat.innerHTML = "Spelet er ferdig.<br> Din totale poengsum er " + f_summerResultat() + " av " + totaltAntForsok + " moglege.";
	}
}


// Summerer opp poengsummen som befinn seg i tabellen
function f_summerResultat() {
	var sum = 0;
	for(var i=0;i<totaltAntForsok;i++){
		sum = sum + Number(tabResultat[i]);
		console.log("Sum: " + sum + ". tabResultat[" + i + "]: " +  tabResultat[i] + ".");
	}
	return sum;
}