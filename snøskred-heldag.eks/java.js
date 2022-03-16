//henter html el.

let btn_alfa = document.getElementById("btn_alfa");
let btn_fare = document.getElementById("btn_fare");
let utTabell = document.getElementById("utTabell");
let frm_søk = document.getElementById("frm_søk");
let divSøkeInfo = document.getElementById("spesifikkInfo");
let frm_endre = document.getElementById("frm_endre");

//gjemmer div-en
divSøkeInfo.style.display="none";


//funksjon som sorterer aktiveres når kanppene trykkes
btn_alfa.addEventListener("click",f_sorter);
btn_fare.addEventListener("click",f_sorter);

//funksjon påkalles når frm blir sendt
frm_søk.addEventListener("submit",f_Søking);
frm_endre.addEventListener("submit",f_endre);

/*-------------------------------
lager liste med ønsket regioner
--------------------------------*/

var skredObservasjonar = [  
    {område: "Vestland", stednavn: "Oksen", skredfare : tallGenerator(1,5)}, 
    {område: "Østlandet", stednavn: "Vassfjøro", skredfare: tallGenerator(1,5)}, 
    {område: "Nord-Norge", stednavn: "Lyngen", skredfare: tallGenerator(1,5)}, 
    {område: "Nord-Norge", stednavn: "Ingebjørgfjellet", skredfare: tallGenerator(1,5)},
    {område: "Sør-landet", stednavn: "Lofoten", skredfare: tallGenerator(1,5)},
    {område:"Vestland", stednavn:"Trondheim",skredfare:tallGenerator(1,5)},
    {område:"Østlandet", stednavn:"Kristiandsand",skredfare:tallGenerator(1,5)},
    {område:"Sør-landet", stednavn:"Stavanger",skredfare:tallGenerator(1,5)},
]



/*-------------------------------
lager tabellen med info
--------------------------------*/
function f_lagTabell(skredObservasjonar){
    
    //tømmer tabellen slik at det ikke printes nye tabeller for hver endring i tabellen - eks. sortering
    utTabell.innerHTML ="";

    
    //lager først tabellen
    let tabell = document.createElement("table");


    //såheaderne på toppen
    let header1 = document.createElement("th");
    let header2 = document.createElement("th");
    let header3 = document.createElement("th");

    //definerer headerenes innhold
    header1.innerHTML="region";
    header2.innerHTML="stedsnavn";
    header3.innerHTML="skredfare";

    //lager rad for th
    let radHeader = document.createElement("tr");

    //legger inn overskriftene i radet
    radHeader.appendChild(header1);
    radHeader.appendChild(header2);
    radHeader.appendChild(header3);
    //legger radet inn i tabellen
    tabell.appendChild(radHeader);

    //lager loop for å pushe info fra array inn i tabell
    for(let info of skredObservasjonar){
        //sjekker i consolen først
        console.log(info);
        //lager rad 
        let rad = document.createElement("tr");
        
        //lager celler som skal være i raden
        let celle1 = document.createElement("td");
        let celle2 = document.createElement("td");
        let celle3 = document.createElement("td");

        /*-------------------------------
        eks. på hvordan man lager link
        --------------------------------*/
        /*
        //lager link for områdene
        let link = document.createElement("a");
       
        //gir en tom src til lenkene slik at siden ikke "redirecter" videre
        link.href="#";
        //sier hva teksten på lenke skal være --> navn på området
        link.innerHTML=info.område;
        //gir lenken en id
        link.id = info.område;
 
        //legger den til i cellen
        celle1.appendChild(link);*/

        let region =document.createElement("p");
        region.innerHTML=info.område;

        //legger til regionen i celle
        celle1.appendChild(region);
        //legger resten av infoen i cellen
        celle2.innerHTML+=info.stednavn;
        celle3.innerHTML+=info.skredfare;

        //aktiverer funksjonen som vurderer skredfaren
        f_fare(celle3);

        //limer inn cellene i raden
        rad.appendChild(celle1);
        rad.appendChild(celle2);
        rad.appendChild(celle3);
        //limer raden inn i tabell
        tabell.appendChild(rad);
        
       
    }

    //printer ut tabellen
    utTabell.appendChild(tabell);

  
    

};


/*-------------------------------
Funksjoner
--------------------------------*/

//kjører funksjonen for å vise tabellen
f_lagTabell(skredObservasjonar);


//funksjon som gir vurderer skredfare
function f_fare(celle){
    //finnner først fare nivåe og gjør det om til tall
    let fareNivå = Number(celle.innerHTML);

        //gir beskjeder om ulike nivåer av skredfare
        //nivå 1-2
        if(fareNivå<3){
        celle.innerHTML+=" - lite farlig";
        celle.style.backgroundColor=" rgb(150, 211, 148)";

        }
        //nivå 3-4
        else if(fareNivå<5){
        celle.innerHTML+=" - ganske farlig";
        celle.style.backgroundColor="rgb(241, 240, 153)";


        }
        //når nivået = 5 er det farlig og rødt nivå
        else{
        celle.innerHTML+=" - altfor farlig";
        celle.style.backgroundColor="rgb(255, 126, 126)";
        
        }
}

//funksjon som hjelper oss med å finne tall
function tallGenerator(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //Max og min tallet er inkludert
}
    
//funksjon som sorterer
function f_sorter(evt){
    //tester at det fungerer
    console.log("sorterings funksjonen kjører");

    //referer til knappen som trykkes
    let knapp = evt.target; 
    //henter attributt
    let knappType= knapp.getAttribute("data-btn");

    //nå skal vi definere de to sorteringsformene
    if(knappType==="fare"){
        //tester i consol
        console.log(knappType);

        //sorterer tall
        skredObservasjonar.sort(function(a,b) {
            return a.skredfare - b.skredfare; 
        });
    }
    else{
        //tester i consol
        console.log(knappType);

        //aktiverer alfabetisk sortering
        skredObservasjonar.sort(function(a, b) {
            const navnA = a.område.toUpperCase();
            const navnB = b.område.toUpperCase();
            let comparison = 0;
            if (navnA > navnB) {
                comparison = 1;
            } else if (navnA < navnB) {
                comparison = -1;
            }
            return comparison;
        });

    }
    //etter forandringene, bygges tabellen på nytt
    f_lagTabell(skredObservasjonar);
}


 //funksjon som viser det man søker opp
function f_Søking(evt){
    evt.preventDefault();//hindrer at siden oppdateres

    //viser diven
    divSøkeInfo.style.display="block";

    //tømmer div-en hver gang funksjonen aktiverers
    divSøkeInfo.innerHTML="";

    //hetner inp verdiene
    let inpRegion = document.getElementById("inpRegion").value;
    let inpTall = document.getElementById("inpTall").value;
    //tester
    console.log("funksjon kjører");


    //traverserer array
    for(let info of skredObservasjonar){
        
        //hvis man finner samme verdi i array
        if(inpRegion===info.område){
                //tester
            console.log("fant lik region");
            
            //skrive ut i diven
            divSøkeInfo.innerHTML+=info.område+": ";
            divSøkeInfo.innerHTML+="Stedsnavn: "+info.stednavn+" ";
            divSøkeInfo.innerHTML+="Skredfare: "+info.skredfare+" <br>";
        }
        //hvis man finner samme verdi i array
        else if(Number(inpTall)===info.skredfare){
                //tester
            console.log("fant lik skredfare");
             //skrive ut i diven
            divSøkeInfo.innerHTML+=info.område+": ";
            divSøkeInfo.innerHTML+="Stedsnavn: "+info.stednavn+" ";
            divSøkeInfo.innerHTML+="Skredfare: "+info.skredfare+" <br>";
        }
    }

}

//funksjon som endrer på informasjonen
function f_endre(evt){
    evt.preventDefault();//hindrer at siden oppdateres

    //henter verdiene som brukeren legger i inp feltet
    let infoRegion = document.getElementById("inpEndreRegion").value;
    let infoSted = document.getElementById("inpEndreSted").value;
    let infoFare = document.getElementById("inpEndreTall").value;

    //gjør om til sett
    let SetOBservasjon = new Set(skredObservasjonar);
    console.log(SetOBservasjon);

}

