//lager en variabel som brukeren  
let favorittOrd = prompt("hei hva er favoritt ordet ditt?");

//skriver ut en melding her
let melding= document.getElementById("melding");

//sjekker hva brukeren har skrevet
console.log("favoritt ordet er :"+favorittOrd);

//lager en array med ulovlige ord
let SensurerteOrd = ["stygg", "dritt", "dø", "hoe", "moren din", "drittunge", "drittsekk", "jævel", "jævla", "helvete", "satan", "fuck", "faen"];

/*---------------------------------------
  gir en alternativ for det stygge ordet
---------------------------------------*/

//lager en array med alternativ fine ord 
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

//trenger et tilfeldig tall med lengden av den "snille" arrayen
let tall = tallGenerator(0,skryteOrd.length);

//her blir det tilfeldige nye "fine" ordet generert
let altOrd = skryteOrd[tall];


//funksjon som hjelper oss med å finne et tilfeldig tall
function tallGenerator(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //Max og min tallet er inkludert
}
/*---------------------------------------
    setter i gang sjekkingen 
---------------------------------------*/
//gjør om variablene til uppercase og lower case
let ORD = favorittOrd.toUpperCase();
let ord = favorittOrd.toLowerCase();

//sjekker om ordene finnes i arrayen, og finner index-en deres
let indexORD = SensurerteOrd.indexOf(ORD);
let indexord = SensurerteOrd.indexOf(ord);

if(ord===SensurerteOrd[indexord]){
    //printer en klage som tilbskemelding i html
    melding.innerHTML="<span style='color:red;'> "+ favorittOrd +"</span>"+  " var ikke et fint ord! Du kan heller bruke " + altOrd + ". :)";
    //tester i konsolen
    console.log("det var ikke fint!");
}
else if(ORD === SensurerteOrd[indexord]){
    //printer en klage som tilbskemelding i html
    melding.innerHTML= "<span style='color:red;'> "+favorittOrd  +"</span>" + " var ikke et fint ord! Du kan heller bruke " + altOrd + ". :)";
    //tester i konsolen
    console.log("det var ikke fint!");
}
else{
    //printer en grei tilbskemelding i html
    melding.innerHTML="Det var en grei ord. :)";
    //tester i consolen
    console.log("det var greit");
}

