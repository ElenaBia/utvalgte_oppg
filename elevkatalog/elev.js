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
//lager nye arr for de ulike verdiene
let Navn =[];
let Karakter =[];
//traverserer arr med objekt og pusher de ulike verdiene i nye arr
for(let elev of elever){
    Navn.push(elev.navn);
    Karakter.push(elev.karakter);


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


//sjekker om alt kom i arrayen
console.log("navn "+ Navn);
console.log("karakter " + Karakter);





