//henter variabler som skal manipuleres/brukes fra html
let resultat_k = document.getElementById("krypter_melding");
let btn_krypter = document.getElementById("btn_krypter");
let resultat_d = document.getElementById("dekrypter_melding");

//lager en string som vi henter ut variabelen
// Strategi nr. 1
const alfabet = "abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ,.-_!? "; // 
/*let posisjonTilBokstav = alfabet.indexOf("b");
console.log(posisjonTilBokstav);*/


//funksjon som skal kryptere bokstavene: 
//i parameteret sier vi hvilke bokstav vi ønsker å kryptere og hvor stor steget er
function f_krypter(originalBokstav, krypteringsnøkkel){
    
    //definerer posisjonen til originalbokstaven -> nevnt i parameter -> de nederst
    let posisjonTilBokstav = alfabet.indexOf(originalBokstav);
    //Definerer ny posisjon ved å plusse "steget" og gammelposisjonen
    let nyPosisjon = posisjonTilBokstav + krypteringsnøkkel;
    //får fram den nye bokstaven som er kryptert
    let nyBokstav = alfabet[nyPosisjon];

    //hva som skjer når den går utenfor array/string.lenght -> kommer til siste bokstav

    //egen test
    /*if(originalBokstav = alfabet.length-1){
        console.log("du er utenfor");
        //vi setter -1 slik hvis nøkkelen er 1, så blir ikke siste bokstav til b. 0+1 = 1 = b
        nyPosisjon = -1 + krypteringsnøkkel;
        //får fram den nye bokstaven som er kryptert
        nyBokstav = alfabet[nyPosisjon];
    }*/

    //fasit
    if (nyPosisjon >= alfabet.length) { // Handterer det at me kjem utanfor arrayen sin lengde (å -> undefined)
        nyPosisjon = nyPosisjon - alfabet.length;
    }

    //sjekker hva vi fikk
    console.log("fikk inn " + posisjonTilBokstav);
    console.log("ny posisjon " + nyPosisjon);
    console.log("ny bokstav " + nyBokstav);
    
    //printer det ut
    resultat_k.innerHTML = originalBokstav + "-->" +  nyBokstav;
}

//bestemmer hvilken variabel og steg vi bruker
f_krypter("å",1);





function dekrypterBokstav(originalBokstav, krypteringsnøkkel) {
    let posisjonTilBokstav = alfabet.indexOf(originalBokstav); // Plasseringen til den originale/ukrypterte bokstaven
    let nyPosisjon = posisjonTilBokstav - krypteringsnøkkel; // Plasseringen til den nye/krypterte bokstaven
    if (nyPosisjon < 0) { //Kommer utenfor arrayen sin lengde (å -> undefined)
        nyPosisjon = nyPosisjon + alfabet.length;
    }
    let nyBokstav = alfabet[nyPosisjon]; // Kva den krypterte bokstaven faktisk er 
    
    //printer det ut
    resultat_d.innerHTML = originalBokstav + " --> " + nyBokstav;
}
//tester dekrypteringen
dekrypterBokstav("q",1);



