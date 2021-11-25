//det brukeren setter inn
let inputMelding = document.getElementById("inputMelding");
let inputKrypteringsnokkel = document.getElementById("inputKrypteringsnokkel");

//det som kommer ut
let outputMelding = document.getElementById("outputMelding");
let outputBruteForce = document.getElementById("outputBruteForce");

//knapper fra html
let knappKrypter = document.getElementById("knappKrypter");
let knappDekrypter = document.getElementById("knappDekrypter");
let knappBruteForce = document.getElementById("knappBruteForce");

//funksjoner som aktiveres når man trykker på følgende knapper
knappKrypter.onclick = f_krypterMelding;
knappDekrypter.onclick = f_dekrypterMelding;
knappBruteForce.onclick = f_bruteForce;

//definerer alfabete
const alfabet = "abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ,.-_!?";
let alfabetLengde = alfabet.length;
console.log(alfabetLengde);
    
// Den hemmelege beskjeden, og annan informasjon om krypteringen
let kryptertMelding = "";
let ukryptertMelding = "";
let krypteringsnokkel = 0; // "Forskyvningen", kvitteringsnøkkelen, eksempelvis skal 'a' bli 'c'. 0 gjer at 'a' blir 'a', 1 gjer at 'a' blir 'b'
let karakter = "";


/*    ------------------------------------

        funksjoner som krypterer boktav, men 
        ikke hele meldinger?
    
     -----------------------------------*/

// Krypteringsfunksjonen, som får inn bokstaven ein skal kryptere, samt krypteringsnøkkelen. Returnerer den nye bokstaven.
function krypterBokstav(bokstavInn, krypteringsnokkelInn){
    posisjon = alfabet.indexOf(bokstavInn);
    posisjonNy = (posisjon + krypteringsnokkelInn);
    //console.log("posisjonNy før if: " + posisjonNy);
    if(posisjonNy >= alfabetLengde){
        posisjonNy = posisjonNy - alfabetLengde;
        //console.log("if køyrer i krypterBokstav... posisjonNy:" + posisjonNy);
    }
    console.log("krypterBokstav fekk inn bokstavInn:" + bokstavInn + ", krypteringsnokkelInn:" + krypteringsnokkelInn + ", posisjon:" + posisjon + ", posisjonNy:" + posisjonNy + " - og returnerer: " + alfabet[posisjonNy]);
    return alfabet[posisjonNy];
}

// Dekrypteringsfunksjonen, mistenkeleg lik som krypteringsfunksjonen. Kva er anleis?
function dekrypterBokstav(bokstavInn, krypteringsnokkelInn){
    posisjon = alfabet.indexOf(bokstavInn);
    posisjonNy = (posisjon - krypteringsnokkelInn);

    if(posisjonNy < 0){
        posisjonNy = posisjonNy + alfabetLengde;
    }
    return alfabet[posisjonNy];
}

// Test av kryptering, utan at brukar må skrive inn:
console.log(krypterBokstav("a",1));


/*


    Funksjonen som går gjennom heile meldinga (frå inputfeltet) og krypterer 
    med hjelp av krypterings funksjonen for bokstav
    ---------------------------------------------------------



*/
function f_krypterMelding(){
    // Hentar ut melding
    ukryptertMelding = inputMelding.value;
    console.log(ukryptertMelding);

    //forsikrer at nøkkelen er et tall
    krypteringsnokkel = Number(inputKrypteringsnokkel.value);
    console.log(krypteringsnokkel);

    //lar den krypterte mld være tom for så vidt
    kryptertMelding = "";

    //Loopen skal gå gjennom hele meldingen i input feltet
    for(let i = 0; i < ukryptertMelding.length; i++) { 

        // Dersom vi finner bokstaven i alfabetet...
        if(alfabet.indexOf(ukryptertMelding.charAt(i)) !== -1){ 
            //skal den bli kryptert.
            kryptertMelding = kryptertMelding + krypterBokstav(ukryptertMelding.charAt(i),krypteringsnokkel); 
            //console.log("If, bokstav funnen. Iterasjon nr. " + i + ". Innhald ukryptertMelding.charAt(i) = " + ukryptertMelding.charAt(i));
        }
        else{
            // Dersom vi ikkje finner bokstaven/teiknet, legg det til slik det er.
            kryptertMelding = kryptertMelding + ukryptertMelding.charAt(i); 
            //console.log("Else, bokstav ikkje funnen. Iterasjon nr. " + i + ". Innhald: " + ukryptertMelding.charAt(i));
        }
    }


    console.log("Resultatet med 'tradisjonell for-løkke' er = " + kryptertMelding + ".");
    outputMelding.innerHTML = "Kryptert melding av input <span style='color:red;'>" + ukryptertMelding + "</span>, blir oversatt til <span style='color:red;'>" + kryptertMelding + "</span>.";



    /*

        Alternatic som er mindre komplisert
        ----------------------------------
    */
    let resultat = "";
    for(let bokstav of ukryptertMelding) {

        //hvis den er i alfabetet
        if(alfabet.indexOf(bokstav) !== -1){
            resultat = resultat + krypterBokstav(bokstav,krypteringsnokkel);
        }
        //hvis den er innenfor
        else{
            resultat = resultat + bokstav;
        }
    }
    console.log("Resultatet med for .. of er: " + resultat);
}





/* 


    Funksjonen som dekypterer meldinga frå tekstfeltet
    --------------------------------------------------


*/
function f_dekrypterMelding(){
    //setter tom verdi for resultatet til å begynne med
    dekryptertMelding = "";
    //henter info fra input feltet
    kryptertmelding = inputMelding.value;
    krypteringsnokkel = Number(inputKrypteringsnokkel.value);

    for(let bokstav of kryptertmelding){

        //hvis den er innenfor alfabetet
        if(alfabet.indexOf(bokstav) !== -1){
            dekryptertMelding = dekryptertMelding + dekrypterBokstav(bokstav, krypteringsnokkel);
        }
        //hvis den er utenfor, skal den bare bli seg selv
        else{
            dekryptertMelding = dekryptertMelding + bokstav;
        }
    }
    console.log("Den krypterte meldinga " + kryptertmelding + " blir oversatt til: " + dekryptertMelding);
    outputMelding.innerHTML = "Dekryptert melding av input <span style='color:red;'>" + kryptertMelding + "</span> blir oversatt til <span style='color:red;'>" + dekryptertMelding + "</span>.";
}

/*
    Funksjonen som hjelper deg å teste ut "haugevis" av kombinasjonar av nøklar,
    dersom du ikkje har denne informasjonen. NB: Burde brukt f_dekrypterMelding-funksjonen..
    ----------------------------------------------------------------------------------------
*/
function f_bruteForce(){
    //henter ut kryptert melding fra inoutfeltet
    kryptertMelding = inputMelding.value;
    dekryptertMelding = "";

    //skal endres av for løkken og bli til j
    krypteringsnokkel = 0; 

    outputBruteForce.innerHTML = "";

    //j skal øke med 1 for hele lengden av alfabetet
    for(let j = 1; j<=alfabet.length; j++){

        //sier først hva nøkkelen blir for hver gang den øker
        outputBruteForce.innerHTML += "<p>Nøkkel: " + j + "<br>";

        //setter ny tom verdi..hvorfor?
        dekryptertMelding = "";

        for(let bokstav of kryptertMelding){
            //hva skjer hvis nøkkelen er innenfor alfabetet
            if(alfabet.indexOf(bokstav) !== -1){
                //setter krypteringsnøkkelen til j
                krypteringsnokkel = j;
                dekryptertMelding = dekryptertMelding + dekrypterBokstav(bokstav,krypteringsnokkel);
                //  dekryptertMelding += dekryptertBokstav(bokstav, nøkkel...) alternativt?
            }
            else{
                //hvis ikke bare sett bokstaven til det samme
                dekryptertMelding = dekryptertMelding + bokstav;
            }
        }
        outputBruteForce.innerHTML += dekryptertMelding + "</p>";
        console.log(dekryptertMelding);
    }
}