//henter variabler som skal manipuleres/brukes fra html
let resultat = document.getElementById("melding");
let btn_krypter = document.getElementById("btn_krypter");


btn_krypter.addEventListener("click",krypterEnkelt);
//lager en array
ArrayBokstav = ["a", "b", "c", "d", "e", "f", "g", "h"];

//lager en variabel som blir den krypterte meldingen
let kryptertMelding = "";

//første egen forsøkt
function krypterEnkelt(){
    for (let i = 0; i < ArrayBokstav.length; i++) {
       
       if(i==ArrayBokstav.length-1){
            console.log ("det er utenfor no");
           kryptertMelding += ArrayBokstav[0];
        }
        else{
            kryptertMelding += ArrayBokstav[i+1] + " ";
        }
    }
   
    resultat.innerHTML = kryptertMelding;
}
