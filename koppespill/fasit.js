



// Testar om den koppen brukaren har valgt er den korrekte.
// Gjer og tilbakemelding om det er nært eller langt frå.
function f_resultat() {
	// Testar om ein har fleire forsøk igjen
	if(antForsok<totaltAntForsok) {
		// Tester om resultatet er riktig og gjer tilbakemelding
		if(forslag === nyplass) {
			p_resultatUt.innerHTML = "Gratulerar!";
			tabResultat[antForsok] = 1;
			// Plasserer mynt
			if(nyplas===1 && forslag===1) {
				kopp1.src = "bilder/mynt.png";
				}
				else if(nyplass===2 && forslag===2) {
					kopp2.src = "bilder/mynt.png";
				} else if(nyplass===3 && forslag===3) {
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
		utAntForsok.innerHTML = "Forsøk " + antForsok + ". " + (totaltAntForsok-antForsok) + " forsøk igjen.";
		f_ohSoClose(nyplass,forslag); // Gjer tilbakemelding om kor nært ein er riktig svar.

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
		btn_startSpel.style.visibility = "visible";
		utEndelegResultat.innerHTML = "Spelet er ferdig.<br> Din totale poengsum er " + f_summerResultat() + " av " + totaltAntForsok + " moglege.";
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