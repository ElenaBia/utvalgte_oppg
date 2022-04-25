/* ---------------------------------------

begynner å manipulere el fra html 

-----------------------------------------*/


//henter div-el fra html
const app = document.getElementById('root');

//lager et bilde el. for logoen av nettsiden
const logo = document.createElement('img');
logo.src = 'logo.png';

//lager en ny div for å ha logoen og containeren inn
const container = document.createElement('div');
container.setAttribute('class', 'container');

//legger det inn på nettsiden
app.appendChild(logo)
app.appendChild(container)


/* ---------------------------------------

sender en request om å hente data fra nettsiden

-----------------------------------------*/


// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL of the API endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

//when the request loaded, this function will activate. --> waits for the request to load before 
// "reading" the data. Line 35 might take longer to execute--> better to wait for the load
request.onload = function () {

    // Begin accessing JSON data here
    // "this" referer til URL-en man henter data fra
    var data = JSON.parse(this.response);

   
    //makes a loop to check how long the request takes
    //if request takes x amount of time
    if (request.status >= 200 && request.status < 400) {
        //prints out every name that is within that timespan
        data.forEach(movie => {
          console.log(movie.title)
        })
        //if it takes longer we get an error response
      } else {
        console.log('error')
    }

    //looper gjennom alle film for å create en ny "boks" med info fra json data
    data.forEach(movie => {
        //tester
        console.log(movie.title)
     
        // Create a div with a card class
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        // Create an h1 and set the text content to the film's title
        const h1 = document.createElement('h1')
        h1.textContent = movie.title

        //henter cover bildene
        const coverImg = document.createElement("img");
        coverImg.src = movie.image;

        // Create a p and set the text content to the film's description
        const p = document.createElement('p')
        p.textContent ="Director: " + movie.director+". ";
        movie.description = movie.description.substring(0, 300) // Limit to 300 chars
        p.textContent += movie.description +"..."; // End with an ellipses
  

        // Append the cards to the container element
        container.appendChild(card)


        // Each card will contain an h1 and a p
        card.appendChild(h1)
        card.appendChild(coverImg)
        card.appendChild(p)

    })
   

}; 

// Send request
request.send();

/* ----------Alternativ--------------

function getData() {
  const response = await fetch('https://ghibliapi.herokuapp.com/films')
  const data = await response.json()
}
*/


