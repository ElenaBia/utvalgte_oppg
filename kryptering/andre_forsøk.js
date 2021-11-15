//henter variabler som skal manipuleres/brukes fra html
let resultat = document.getElementById("melding");
let btn_krypter = document.getElementById("btn_krypter");

//lager en string som vi henter ut variabelen
const alfabet = "abcdefghijkl";

//krypteringen skal aktiveres når vi trykker på knappen
//btn_krypter.addEventListener("click", f_krypter);

//lager en variabel som skal tilsvare krypteringsnøkkelens steg, en slags variant for i
/*let posisjonTilBokstav = alfabet.indexOf("b");
console.log = posisjonTilBokstav;*/


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
    if(originalBokstav = alfabet.length-1){
        console.log("du er utenfor");

        //vi setter -1 slik hvis nøkkelen er 1, så blir ikke siste bokstav til b. 0+1 = 1 = b
        nyPosisjon = -1 + krypteringsnøkkel;
        //får fram den nye bokstaven som er kryptert
        nyBokstav = alfabet[nyPosisjon];
    }


    //sjekker hva vi fikk
    console.log("fikk inn " + posisjonTilBokstav);
    console.log("ny posisjon " + nyPosisjon);
    console.log("ny bokstav " + nyBokstav);
}



//bestemmer hvilken variabel og steg vi bruker
f_krypter("l",1);
