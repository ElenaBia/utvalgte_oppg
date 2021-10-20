//lager variabler som manipulerer html el
let btn_string = document.getElementById("btn_string");
let btn_rgb = document.getElementById("btn_rgb");
let btn_hex = document.getElementById("btn_hex");
let farge_kode = document.getElementById("farge-kode");

farge_kode.style.display ="none";




/* ------------------------------
  begynner først med string 
--------------------------------*/

//lager først en array med valgte farger
const ArrayString =["green", "blue", "yellow", "pink", "brown", "black"];
// så en teller som skal hjelpe til med å endre farge når man trykker string knappen
let i=0;
//funksjonen f_string aktiveres når man klikker på knappen string
btn_string.addEventListener("click", f_string);

function f_string(){

    // OBS!!!!!!!! 
    //for å få rett farge til rett tidspunkt så MÅ i++ være nederst! ˆ_ˆ

    //test for å se om funksjonen funker
   // console.log("string");

    //her viser jeg bare hvilke farge man fikk i form av tekst på nettsiden
    farge_kode.style.display ="block";
   // farge_kode.style.color=ArrayString[i];
    farge_kode.textContent = ArrayString[i];
    

    //setter fargen det samme som i-verdien (akk no er det 0)
    document.body.style.background = ArrayString[i];
    i++;

    //hvis den går over siste farge i arrayen så skal vi starte på nytt
    while (i>= ArrayString.length) { // Hvis vi kommer utenfor arrayens lengde
      i = 0;
  } 

}


/* ------------------------------
  prøver nå med rgb
--------------------------------*/

//definnerer noen variabler som vi lager array med
let a= 0;
let b= 0;
let c= 0;

//funksjonen  skal aktiveres når man klikker på rgb knappen
btn_rgb.addEventListener("click", f_rgb);

//funksjon som plukker et tilfeldig tall fra 0 til 255
function RandomNumberRGB(){
    let tilfeldigTall = Math.floor(Math.random()*256);
    return tilfeldigTall;
}

function f_rgb(){

    //setter de nye variablene som tilfeldige tall
    a = RandomNumberRGB();
    b = RandomNumberRGB();
    c = RandomNumberRGB();

    //her kommer arrayen
    const ArrayRGB = [a,b,c];

    //her blir bakgrunnsfargen endret :)
    let rgb_kode = "rgb"+  "("+ArrayRGB[0]+", "+ArrayRGB[1]+", "+ArrayRGB[2]+")";
    document.body.style.background = rgb_kode;

    //her viser jeg bare hvilke farge man fikk i form av tekst på nettsiden
    farge_kode.style.display ="block";
    // farge_kode.style.color=rgb_kode;
    farge_kode.textContent = "RGB-kode: "+rgb_kode;
    
    
    //for å teste hvordan rgb koden ser ut:
    //let  k= "rgb"+  "("+ArrayRGB[0]+", "+ArrayRGB[1]+", "+ArrayRGB[2]+")";
   // console.log(k);

}



/* ------------------------------
  prøver nå med hex
--------------------------------*/

//variabel som skal hjelpe med i funksjonen






btn_hex.addEventListener("click",f_BakgrunnHex);


function f_BakgrunnHex(){
  
  let Kazaktstan = f_hex();
  document.body.style.background = Kazaktstan;

  //her viser jeg bare hvilke farge man fikk i form av tekst på nettsiden
  farge_kode.style.display ="block";
  // farge_kode.style.color=HexFarge;
  farge_kode.textContent = "Hex-kode: "+Kazaktstan;


}


function f_hex(){
  
  //let HexFarge = "#"+ Math.floor(Math.random()*16777215).toString(16);//https://css-tricks.com/snippets/javascript/random-hex-color/

  let arrHex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
  let HexFarge = "";
 
  for(let hex_kode = 0; hex_kode < 6; hex_kode++) {
    HexFarge += arrHex[getRandomIntInclusive(0,arrHex.length-1)];
  }
  return "#" + HexFarge; 
   
}



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}