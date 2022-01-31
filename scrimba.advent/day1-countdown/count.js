let audio = document.getElementById("audio");
const countdownDisplay_d = document.getElementById("countdownDate-display");
const countdownDisplay_t = document.getElementById("countdownTime-display");

const h1 = document.getElementById("h1");

//xmas music

let XmasSongs = ["All-I-Want","Santa-Baby","Shake-Up","Santa-Tell-Me","Deck-The-Halls"];
let shuffleList =[];


function music(){

    //getting random songs everytime the page open
    while(XmasSongs.length > 0) {
        //get a random song number
        let songNr = getRandomIntInclusive(0,XmasSongs.length-1);
        //finds the song by putting its number in an array
        let songTitle = XmasSongs[songNr];

        //pushing the random songs in the new array
        shuffleList.push(songTitle);
        
        //deleting the song so it doesnt repeat itself so that we get the same song in the shuffleList
        XmasSongs.splice(songNr,1);
    }

    /* ------------------------------------------------
 
        problem 1: autoplay fungerer ikke hvis man refresher
        nettsiden.


        problem 2: pga. for-loopen under går fort gjennom arrayen, 
        er det sannsynligvis bare den siste sangen som blir spilt av.
        Så blir det stille.
      
       ---------------------------------------------------*/




   //playing all the songs in the new array
    for(let song=0;song<shuffleList.length;song++){
    
        //changing the src of the audio which play
        audio.src ="songs/" +shuffleList[song] + ".mp3";
        //checking the new order of the songs
        console.log(shuffleList[song]);
    }

    //cheking if its the same as the 
    console.log(shuffleList);
}


//starting the other functions when the window loads
window.onload=function(){
    //auto starting the other functions
   music();
   // Update the count down every 1 second,
   setInterval(myTimer, 1000);

}


//making this variable to use when the countdown is over
let x = setInterval(myTimer(),1000)
        
function myTimer() {

    // https://tecadmin.net/get-current-date-time-javascript/
    //https://www.w3schools.com/howto/howto_js_countdown.asp
    
    // Set the date we're counting down to
    var christmas = new Date("Dec 24, 2021 00:00:00").getTime();


    // Get today's date and time
    var today = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = christmas - today;



    //finding out how many days, minutes, and seconds there are til countdown date
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
        
    //printing the information out in the html
    countdownDisplay_d.innerHTML = days + " days";
    countdownDisplay_t.innerHTML = hours + "h " + minutes + "m " + seconds + "s "; 

    // If the count down is finished, write some text
    if (distance < 0) {
        //here comes the variable we made earlier
        clearInterval(x);            
        h1.innerHTML= "Today is Christmas Day!"

    }
}

//funksjon som hjelper oss med å finne tall
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}



