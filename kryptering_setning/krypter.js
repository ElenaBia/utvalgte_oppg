//henter html elementer
let resultat_kryptert = document.getElementById("kryptert");
let resultat_dekryptert = document.getElementById("dekryptert");

//meldingen som krypteres og dekrypteres
let melding = "Hei! I morgen kl. 20.15 kan jeg møte deg for å levere pakken.";
//lager de to nye tomme variabler som skal krypteres og dekrypteres
let kryptertMelding = "";
let dekryptertMelding = "";

//definerer rekke med alfabet
const alfabet = "abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ,.-_!?1234567890 ";  

//funksjon som skal kryptere bokstavene: 
//i parameteret sier vi hvilke bokstav vi ønsker å kryptere og hvor stor steget er
function f_krypter(originalBokstav, krypteringsnøkkel){
    
    //definerer posisjonen til originalbokstaven -> nevnt i parameter -> de nederst
    let posisjonTilBokstav = alfabet.indexOf(originalBokstav);
    //Definerer ny posisjon ved å plusse "steget" og gammelposisjonen
    let nyPosisjon = posisjonTilBokstav + krypteringsnøkkel;

    //hva som skjer når den går utenfor array/string.lenght -> kommer til siste bokstav
    if (nyPosisjon >= alfabet.length) { 
        nyPosisjon = nyPosisjon - alfabet.length;
    }

    //får fram den nye bokstaven som er kryptert
    let nyBokstav = alfabet[nyPosisjon];
    //sjekker hva vi fikk
   console.log(originalBokstav + "-->" +  nyBokstav);

    //Må ha denne linjen for at den nye bokstaven kommer ut i html
    return nyBokstav;
}


for (let tegn of melding) {
    //console.log(tegn);
    kryptertMelding += f_krypter(tegn,1);
}

resultat_kryptert.innerHTML = kryptertMelding;

//dekrypterer
function f_dekrypter(originalBokstav, krypteringsnøkkel) {
    let posisjonTilBokstav = alfabet.indexOf(originalBokstav); // Plasseringen til den originale/ukrypterte bokstaven
    let nyPosisjon = posisjonTilBokstav - krypteringsnøkkel; // Plasseringen til den nye/krypterte bokstaven
    if (nyPosisjon < 0) { //Kommer utenfor arrayens lengde (å -> undefined)
        nyPosisjon = nyPosisjon + alfabet.length;
    }
    let nyBokstav = alfabet[nyPosisjon]; // Hva den krypterte bokstaven faktisk er 
    
    console.log(originalBokstav + " --> " + nyBokstav);
    return nyBokstav
}

for (let tegn of kryptertMelding) {
   // console.log(tegn);
    dekryptertMelding += f_dekrypter(tegn,1);
}

resultat_dekryptert.innerHTML = dekryptertMelding;