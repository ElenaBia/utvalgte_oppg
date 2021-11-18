let test_btn = document.getElementById("btn_test");

//npr du trykker på knappen så skal en funksjon aktiveres
test_btn.onclick = function(evt){
    let KnappStartFunksjon = evt.target; //Referer til knappen som blir trykket
    console.log("ID: " + KnappStartFunksjon.id); //Viser til attributtet id til knappen
    console.log("innerHtml: " + KnappStartFunksjon.innerHTML); 
}