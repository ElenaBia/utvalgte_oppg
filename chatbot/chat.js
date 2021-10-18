let chat = document.getElementById("chat");

let btn = document.getElementById("btn_interesse");


let overskrift = document.getElementById("overskrift");

//spør om navn

let navn = prompt("Navnet ditt er? " );

overskrift.innerHTML = "Hei " + navn + ".";


let farge = prompt("Hvilken farge liker du?");
if(farge.toUpperCase().includes("ROSA")){
    chat.innerHTML +=" <li> kult det</li>";
}
else{
    chat.innerHTML = "<li>hmm..ok sus</li>";
}






btn.addEventListener("click", f_send);

function f_send(){

    let interesse = document.getElementById("interesse").value;
    
    if(interesse ==1){
        chat.innerHTML +="<li>Woaw, jeg liker også mat</li>!";
        console.log("lol");
    }
    else if(interesse == 2){
        chat.innerHTML+="<li>Ugh, eg liker ikke å spille</li>";
        console.log("hei");
    }
    else if(interesse ==3){
        chat.innerHTML+= "<li>woaaa, jeg liker også planter!</li>"
        console.log("nei");
    }
}







