//henter ut variablene fra html som vi skal manipulere 
let navn = document.getElementById("navn");
let antallK = document.getElementById("antallKommentar");
let form = document.getElementById("form");
let melding = document.getElementById("melding");

//gjemmer meldingen som kommer
melding.style.display = "none";



//lager en array av fine ord
let skryteOrd = [
    " sjenerøs",
    " omgjengelig",
    " ambisiøs",
    " munter",
    " hardtarbeidende",
    " troverdig",
    " tålmodig",
    " optimistisk",
    " følsom",
    " sosial",
    " besluttsom",
    " morsom",
 
];

//tenker å lage en funksjon som passer på at det er tall/bokstaver der det skal være
antallKommentar.oninput=navn.oninput= function(){

}

//når brukeren sender inn info skal..
form.onsubmit=function(evt){
    //hindrer at vi oppdaterer siden
    evt.preventDefault();
    //ser verdiene i konsolen
    console.log("navn = " + navn.value);
    console.log("antall Kommentarer = " +antallK.value);
    //fjerner formen for å gi plass til meldingen
    form.style.display ="none";

    //aktiverer den andre funksjonen
    PrinteMelding();

    //nå skal meldingen komme opp.
    melding.style.display = "block";

}

//funksjon som hjelper oss med å finne tall
function tallGenerato(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

//lager en tom array som fylles av funksjonen printeMelding
let kommentarArr = [];



//funksjon som skal gi ut meldingen
function PrinteMelding(){
    //sier at vi skal få ut like mange kommentarer som brukeren la inn
    for(let i=0; i<antallK.value; i++){

        //finner et tilfeldig tall fra hele array med fine ord
        let KommentarNr = tallGenerato(1,skryteOrd.length-1);

        //finne hvilket kommentar tallet over tilsvarer
        let kommentar= skryteOrd[KommentarNr];
        //tester hvilken kommentar det er
        console.log("tilfeldig K=" + kommentar);
        //fjerner kommentaren fra den store arrayen for å ikke gjenta
        skryteOrd.splice(KommentarNr,1);
        //pusher det inn i det nye arrayen som skal printes ut
        kommentarArr.push(kommentar);

        //her skal vi få en "og" før siste kommentar
        if(i==antallK.value-1){
            //lagrer siste kommentar som et egen variabel
            let sisteK = kommentarArr[i];
            //fjerner denne verdien fra arrayen
            kommentarArr.pop();
            //legger til denne veriden på slutten under navnet av variabelen.
            melding.innerHTML = "Hei " + navn.value + "! Jeg håper at du vet at du er " + kommentarArr +" og " + sisteK + ".";

        }

    }   
    //sjekker hvordan listen ser ut
    console.log(kommentarArr);
}




