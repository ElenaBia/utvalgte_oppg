/* ------------------------------------------------
 
                 Oppgave 1 
      
---------------------------------------------------*/

//lager en array med alle verdiene
let MatListe = ["ost", "paprika","brød","kaviar"];

//lager to ulike slik at man kan se de to i html
let liste = document.getElementById("listeMat");
let liste2 = document.getElementById("listeMat2");

// a) - traverser array med for-of løkke

//traverserer arrayen
for(var mat of MatListe){
    //oppretter en liste med alle matvarene
    liste.innerHTML+= "<li>"+mat+"</li>";
}

// b) traverser uten for-of lokke

for(let i=0; i<MatListe.length;i++){
    liste2.innerHTML+= "<li>"+MatListe[i]+"</li>";
}

/* ------------------------------------------------
 
                 Oppgave 2
      
---------------------------------------------------*/
//array med bøker
let ArrBøker = ["hush hush", "throne of glass", "deep", "Talon", "The sun is also a star"];

let listBøker = document.getElementById("listeBøker");
// a) traverser listen med for-løkke

for(let i=0; i<ArrBøker.length; i++){
    //gjør om alle titlene til stor og små bokstave
 let tittel= ArrBøker[i].toLowerCase();
 let Tittel = ArrBøker[i].toUpperCase();

    let boknavn = ArrBøker[i];

    //hvis boktittelen har liten bokstav...
    if(boknavn===tittel){
        //skal den få stor bokstav
        boknavn = Tittel;
        console.log("boken " + boknavn + " hadde liten boktsav.");
    }
    //ellers..
    else{
        //får den bare være med stor bokstav
        boknavn = Tittel;
    }

    
}

//nå sorterer vi alt
ArrBøker.sort();

//traverserer arrayen
for(var bok of ArrBøker){
    //printer ut listen
    listBøker.innerHTML +="<li>"+bok+"</li>";

}



