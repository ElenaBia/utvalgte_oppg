//henter html el
let dropDown = document.getElementById("dropdown");
let frm_tema = document.getElementById("frm_sendTema");
let boks = document.getElementById("boks");
let overskrift = document.getElementById("overskrift");
let paragraf = document.getElementById("paragraf");
let varsel = document.getElementById("varsel");

//lager en tom array med default-tema
let TemaDefault = [
    //legger  til tema: dark og light 
  {navn:"Dark", tesktF:"white",bakgrunnF:"black", varselF:"yellow"},
  {navn:"Light", tesktF:"black",bakgrunnF:"white", varselF:"green"},

];

//henter det som allerede ligger i localStorage, hvis det finnes ikke noe, bruker vi default
let kolleksjonTema = JSON.parse(localStorage.getItem('temaObjekt')) || TemaDefault; 
//pusher inn en ny objekt for hver tema i string. Det blir pushet inn i localStorage
localStorage.setItem('temaObjekt',  JSON.stringify(kolleksjonTema));
 
//sjekker i consolen
console.log("Ved oppstart har vi hentet kolleksjonen fra localStorage:");
//printer i konsolen det som allerede ligger i localStorage
console.table(kolleksjonTema);
f_startOppsett();

/*
    ***************************************************************
    Funksjon som opprettar select-meny og legg den til HTML.
    Basert på koden over om localStorage så opprettest enten gamle
    innstillingar, eventuelt berre defaulten.
    ***************************************************************
*/

function f_startOppsett(){
    
    //creater ny select-el for det som allerede finnes i localStorage

    //looper gjennom alle tema som finnes
    for (let i = 0; i < kolleksjonTema.length; i++) {
        //lager en ny option for hver tema 
        let optionNy = document.createElement("option");
        optionNy.value = kolleksjonTema[i].navn;
        optionNy.innerHTML = kolleksjonTema[i].navn;

        //legger til i select menyen
        dropDown.appendChild(optionNy);
    };
   
};






/*-------------------------------
aktiverer funksjoner
--------------------------------*/
frm_tema.addEventListener("submit",f_RegistrerTema);
dropDown.addEventListener("change",f_AktiverTema);


/*-------------------------------
funksjoner
--------------------------------*/

//funksjon som registrer tema
function f_RegistrerTema(evt){
    evt.preventDefault();//hindrer at siden oppdateres
    
    //tester om f kjører
    console.log("skjema er sendt inn.");
 
    //henter verdiene fra inp-feltet
    let inpTekstF = document.getElementById("inpTekstFarge").value;
    let inpBakgrunnF = document.getElementById("inpBakgrunn").value;
    let inpVarselF = document.getElementById("VarselFarge").value;
    let inpNavn = document.getElementById("navnTema").value;

    //lager et objekt av info fra inp feltet
    temaObj={
        navn:inpNavn,
        tesktF:inpTekstF,
        bakgrunnF:inpBakgrunnF,
        varselF:inpVarselF
    };


    //vi sjekker om navnet har blitt brukt før

    //hvis ja..
    if(f_sjekkNavn(temaObj)===true){
       
       //tømmer objektet
        temaObj={};
        //tester at det fungerer
        console.log("nå er objektet tømmet"+temaObj);

    }
    //ellers
    else{
        //tester at det fungerer
        console.table(temaObj);
        //aktiverer funksjon som pusher inn det nye objektet i arrayen
        f_PushObjekt(temaObj);
        // Oppdaterer localStorage med hele den nye kolleksjonen
        localStorage.setItem('temaObjekt', JSON.stringify(kolleksjonTema)); 

    }; 
};

//funksjon som pusher inn det selvvalgte temaet
function f_PushObjekt(obj){
    //sjekker om det kjører
   // console.log("pushingen fungerer");
    //pusher inn objektet
    kolleksjonTema.push(obj);

    //ser om rett info blir sendt inn
    //console.log(kolleksjonTema);

    //lager en ny option for det som blir sendt inn
    let nyOption = document.createElement("option");
    //setter inn i option-linjen selve verdien og navnet fra inp
    nyOption.value=obj.navn;
    nyOption.innerHTML=obj.navn;

    //legger til i dropdownnen på html
    dropDown.appendChild(nyOption);

};

//denne funksjonen skal aktivere redigeringen av elementene
function f_AktiverTema(){
    //teste om det funker
    console.log("brukeren har valgt et tema");

    //henter valgt tema
    let valgtTema = dropDown.value;
    //tester
    console.log("tema er: "+valgtTema);

 
    //traverserer kolleksjonen
    for(let tema of kolleksjonTema){

        //finner da hvilke objekt det er
        if(valgtTema===tema.navn){
            //tester
            console.log("fant fargen!");
            //henter ut info fra funnet objekt og redigerer stilen
            boks.style.backgroundColor=tema.bakgrunnF;
            paragraf.style.color=tema.tesktF;
            overskrift.style.color=tema.tesktF;
            varsel.style.color=tema.varselF;
        }
        
    }


};

//denne funksjonen skal sjekke om navnet allerede finnes
function f_sjekkNavn(tema){

    //tester
    console.log("sjekker om navnet brukes");

    //lager en map av kolleksjon arrayen
    let mapTema = new Map(
        kolleksjonTema.map(obj => {
            //nøkkelen i map-en=navn fra kolleksjon-array; valuen er ikke så viktig her
          return [obj.navn,obj.tesktF];
        }),
    );  

    // hvis nøkkelen finnes..
    if(mapTema.has(tema.navn)){
        //gir beskjed om at man må bytte navn
        alert("Navnet brukes allerede! Bruk noe annet.");
        //returnerer true
        return true;
    }

};



