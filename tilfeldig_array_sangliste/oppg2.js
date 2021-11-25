let ArrSanger = ['The Lazy Song—Bruno Mars','Love Song—Sara Bareilles','The Zephyr Song—Red Hot Chili Peppers','Immigrant Song—Led Zeppelin','Your Song—Elton John','Mama’s Song—Carrie Underwood','Undone (The Sweater Song)—Weezer','Adam’s Song—Blink 182','Our Song—Taylor Swift','This Ain’t a Love Song—Bon Jovi'];
let liste = document.getElementById("liste");
let btn_shuffle = document.getElementById("btn_shuffle");
const SpillIgjen = document.getElementById("SpillIgjen");

//reloader siden for å spille på nytt
SpillIgjen.addEventListener("click", refresh);

/*

btn_shuffle.addEventListener("click", f_shuffle);



function f_shuffle(){
    //https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
    const shuffledArray = ArrSanger.sort((a, b) => 0.5 - Math.random());

    //printer ut i konsolen den "nye" arrayen:
    console.log(shuffledArray);
    //skriver ut hver sang i listen
    for(let i=0;i<ArrSanger.length;i++){
      liste.innerHTML+= "<li>"+shuffledArray[i]+"</li>";
    }
    SpillIgjen.style.display = "block";
    btn_shuffle.style.display = "none";
}

*/
//her refresher siden og da tilbakestilles alt 
function refresh(){
  location.reload();
}
//andre alternativ:


btn_shuffle.addEventListener("click", spelNeste);
            

function spelNeste() {
  //står tomt først
    liste.innerHTML = "";

    //så lenge lengde er større enn 0
    while(ArrSanger.length > 0) {

    //får et random tall for å gi et random sang
        let songNr = getRandomIntInclusive(0,ArrSanger.length-1);
    
      //finner den tilfeldige sangen ved å sette det talle inn i array
        let songTittel = ArrSanger[songNr];
        console.log("Song: " + songTittel);
      //tar vekk denne sangen for at den ikke gjentar seg
        ArrSanger.splice(songNr,1);

      //legger til i listen sangen vi har funnet
        liste.innerHTML += "<li>" + songTittel + "</li>";
    }
    //vise knappen om å spille på nytt
    SpillIgjen.style.display = "block";
    btn_shuffle.style.display = "none";
}
//funksjon som hjelper oss med å finne tall
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}





