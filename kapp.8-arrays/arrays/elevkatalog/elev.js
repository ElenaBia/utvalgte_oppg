//henter elementer som skal manipuleres
let listeElever = document.getElementById("listeElever");


//lager array med objekt med elev og karakter
let elever=[
    {navn: "Barbie", karakter:3},
    {navn: "Casanova", karakter:6},
    {navn: "Scooby-Doo", karakter:4},
    {navn: "The Rock", karakter:2},
    {navn: "Calvin Klein", karakter:5},
    {navn: "Mojito-Dorito", karakter:1},
    {navn: "Snoop Dogg", karakter:4},
]

//traverserer arr med objekt og pusher de ulike verdiene i nye arr
for(let elev of elever){
    //printer ut listen av elene
    listeElever.innerHTML+="<li> Navnet er: "+ elev.navn +". Karakter er: " + elev.karakter+". </li>"; 
}
 
function LagTabell(elever){
    //lager oppsettet av tabellen, først en linje bare for "overskriftene"
    var HTMLtabell = "<table><tr><th>Navn</th><th>Karakter</th></tr>";
   //sier hvor lang tabellen skal være -> lengde på min array
    for(let elev of elever){
        //her blir informasjonen hentet ut fra funksjonen utenfor
        HTMLtabell += "<tr><td>" + elev.navn  + "</td><td>" + elev.karakter + "</td></tr>";
    }
    //avslutter tabellen
    HTMLtabell += "</table>";
    //returnerer tabellen
    return HTMLtabell;
}
//printer ut
document.getElementById("tabell").innerHTML = LagTabell(elever);

/*---------------------------------------------------------

    Funksjon der brukeren legger til elever

-----------------------------------------------------------*/


//henter variabler fra html
let frm = document.getElementById("frm");
let inpNavn = document.getElementById("InpNavn");
let inpKarakter = document.getElementById("InpKarakter");
const b_leggE = document.getElementById("LeggE");

const btn_sort = document.getElementById("btn_sort");
let inpSort = document.getElementById("InpS");


frm.onsubmit=function(evt){
     //hindrer at vi oppdaterer siden
     evt.preventDefault();
    //aktiverer den andre funksjonen
    LeggTilElev();

}

function LeggTilElev(){
    //definerer de nye variablene elev objektet skal inneholde 
    let elevNavn = inpNavn.value;
    let elevKarakter = Number(inpKarakter.value);
    //lager en ny elev objet
    let Elev ={navn: elevNavn, karakter:elevKarakter};
    //pusher inn i elev arrayen den nye eleven
    elever.push(Elev);
    //sjekker at funksjonen fungerer
    console.log("funksjon kjører");
    //ser om eleven vlir lagt til i konsol
    console.log(elever);

    //printer ut
    document.getElementById("tabell").innerHTML = LagTabell(elever);
  
}


//når sorteringsknappen 
btn_sort.onclick=function(){
    //lager en ny variabel for verdien av det brukeren valgte
    let sortering = inpSort.value;
    
    
    //sier hva de ulike sorteringstypene skal gjøre
    if(sortering==="A"){
        //sjekker i konsolen
        console.log("alfabetisk sortering er valgt");

        //aktiverer alfabetisk sortering
        elever.sort(function(a, b) {
            const navnA = a.navn.toUpperCase();
            const navnB = b.navn.toUpperCase();
            let comparison = 0;
            if (navnA > navnB) {
                comparison = 1;
            } else if (navnA < navnB) {
                comparison = -1;
            }
            return comparison;
        });
        
        //printer ut
        document.getElementById("tabell").innerHTML = LagTabell(elever);
        console.log(elever);

     
    }
    else if(sortering==="Ø"){
                //sjekker i konsolen
        console.log("økende tall sortering er valgt");
        //sorter i fra minste karakter til høyeste
        elever.sort(function(a, b) { 
            return a.karakter - b.karakter; 
        });
          //printer ut
          document.getElementById("tabell").innerHTML = LagTabell(elever);
          console.log(elever);
    }
    else if(sortering==="S"){
                //sjekker i konsolen
        console.log("synkende tall sortering er valgt");
           //sorter i fra høyeste karakter til minste
        elever.sort(function(a, b) { 
        return b.karakter - a.karakter; 
        });
          //printer ut
          document.getElementById("tabell").innerHTML = LagTabell(elever);
          console.log(elever);
    }
    else{
                //sjekker i konsolen
        console.log("ingen sortering er valgt");

    }
}
/*---------------------------------------------------------

    Funksjon der brukeren sletter en elev

-----------------------------------------------------------*/
//henter variabler fra html
const btn_slett = document.getElementById("SlettE");
let inpSlett = document.getElementById("InpSlett");
//en anonym funksjon skal aktiveres når knappen for slett trykkes
btn_slett.onclick =function (evt) {
    //hindrer at informasjonen forsvinn
    evt.preventDefault();
    //henter verdien av det brukeren skriver i feltet
    let elevNavn = inpSlett.value;

 //https://stackoverflow.com/questions/8217419/how-to-determine-if-javascript-array-contains-an-object-with-an-attribute-that-e
    if (elever.some(e => e.navn === elevNavn)) {
        console.log("Fant brukeren.");
        // Slettingen skjer her borte.. Går gjennom array med elever..
        for (let i = 0; i < elever.length; i++) {
            //hvis navnet brukeren testet inn === navn i array
            if(elever[i].navn === elevNavn) {
                //fjerner vi objektet fra elev array
                elever.splice(i,1);
            }
        }
            //printer ut
            document.getElementById("tabell").innerHTML = LagTabell(elever);
            console.log(elever);
    }
    //når navne ikke står i arrayen.
    else {
        console.log("Fant ikkje brukaren.");
    }
}