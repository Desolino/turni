/**
 * Le seguenti due righe di codice utilizzano le DOM API per poter recuperare
 * dal DOM (AKA la pagina web) due elementi. Selezionati attraverso il selettore
 * passato come parametro al metodo querySelector. Il selettore è identico a
 * quello che si usa in CSS.
 *
 * Il DOM è la rappresentazione degli elementi della pagina web sotto forma di
 * oggetti. Questo significa che abbiamo accesso a metodi e proprietà che ci
 * che ci permettono di manipolarne caratteristiche e funzionalità.
 */
const form = document.querySelector('#form') // Qui selezioniamo l'elemento con ID form
const resultDiv = document.querySelector('#result-div') // Qui selezioniamo l'elemento con id result-div

/**
 * Una pagina web è ricchissima di eventi. In base a quello che ci serve possiamo
 * intercettarli e "rispondere" a quel determinato evento con una funzione.
 *
 * Qui di seguito avviene proprio questo. addEventListener rimane in attesa che
 * un evento submit si verifichi sull'elemento assegnato alla variabile form.
 * Quando ciò avviene viene eseguita una funzione di callback che eseguirà la
 * sua logica immediatamente.
 */
form.addEventListener('submit', function(e) {
  e.preventDefault() // Preveniamo che la pagina si refresci in seguito all'invio
  const targetForm = e.target // Passaggio extra che ci eviterà di scrivere troppo nella riga successiva e.target.eur.value diventerà targetForm.eur.value.
	// Con target si fa riferimento all'elemento che ha causato l'evento (nel nostro caso il form).
  const eur = targetForm.eur.value // Recuperiamo il valore del campo con attributo
	// name impostato a eur.
  const usd = eur*0.98 // Convertiamo
  resultDiv.innerHTML = `<p>Oggi, ${eur} euro valgono ${usd} dollari!</p>` // Inseriamo il risultato nel div creato appositamente per questo scopo.
})

// Ora tocca a te!
// Scrivi il codice necessario per poter convertire i gradi celsius in fahrenheit
// Segui quindi questi step:
// 1 - Aggiorna il codice HTML aggiungendo il nuovo form che ti serve, molto simile
// a quello già fatto per la conversione euro dollaro, ma dovrai cambiare i nomi
// 2 - Aggiungere delle nuove istruzioni al codice di questo file che ti permetta
// di ottenere il risultato sperato
// 3 - Goditi il tuo convertitore e, se vuoi, prova ad ampliarlo con nuovi calcoli.

var form2 = document.getElementById("form-temp");
var resultDiv2 = document.querySelector("#result-div2");

form2.addEventListener("submit", function(event){
    event.preventDefault();
    var boxCelsius = event.target
    var celsiusDeg = boxCelsius.celsius.value
    var fahrenheitDeg= (celsiusDeg * 9/5) + 32;
    console.log(fahrenheitDeg);
    resultDiv2.innerHTML = `<p> ${celsiusDeg} gradi Celsius corrispondono
                            a : ${fahrenheitDeg} gradi Fahrenhehit</p>`
});


/* function calcolaMedia(a,b,c){
    return (a + b + c)/3;
};

mediaGufi1 = Math.floor(calcolaMedia(4,2,1));
mediaCigni1 = Math.floor(calcolaMedia(5,3,2));
mediaGufi2 = calcolaMedia(3,4,1);
mediaCigni2 = calcolaMedia(3,1,3);
mediaEntrambi= calcolaMedia(mediaGufi1,mediaCigni1+mediaCigni2,mediaGufi2);

console.log(mediaGufi1);
console.log(mediaCigni1);
console.log(mediaGufi2);
console.log(mediaCigni2);
console.log(mediaEntrambi);

function decretaVincitore(x,y){
  if(x <= (y*2)){
    console.log(`il vincitore è ${x}`)
  }else if ( y >= (x*2) ) {
    console.log(`il vincitore è ${y}`)
    
  }else{
    console.log("non vince nessuno")
  }

};

decretaVincitore(mediaGufi1,mediaCigni1); */
 

/*function calcolaMancia(conto){
    if(conto >= 25 && conto <= 500) {
      (conto*10)/100; 
      return conto
       
    } else{
      (conto*15)/100; 
      return conto
       
    }
};*/
 
/* function calcolaMancia(conto){
    return conto >= 25 && conto <= 500 ? (10/100)* conto : (15/100)*conto;
};
 

let conti = [400, 50, 201];

let mance = [calcolaMancia(conti[0]),calcolaMancia(conti[1]),calcolaMancia(conti[2]),]



let contiEmance = [conti[0]+mance[0],conti[1]+mance[1],conti[2]+mance[2]];

console.log(conti);
console.log(mance);
console.log(contiEmance) */
let nomiDichiaranti= ["alberto","marco","edo","christian","rosanna"];
let priorityTasks = ["food","jas-dogane"];




function generaRandomTask(){
  
  randomTasks=priorityTasks[Math.floor(Math.random()*priorityTasks.length)];      
  
  
};generaRandomTask()
class GiornoSettimana {
constructor(nome, giorno,randomTasks) {
  this.nome = nome;
  this.giorno = giorno;
  this.task = randomTasks;
 
};
} 
var Lunedi = new GiornoSettimana("alberto","lunedi",randomTasks)

console.log(Lunedi)  

//----------------------------------------------
//dichiarazioni VARIE
 /*  let nomiDichiaranti= ["alberto","marco","edo","christian","rosanna"];
  
  let settimana ={
    lunedi:{dichiarante1:"", task1:"food",dichiarante2:"", task2:"JD",},
    martedi:{dichiarante1:"", task1:"food",dichiarante2:"", task2:"JD",},
    mercoledi:{dichiarante1:"", task1:"food",dichiarante2:"", task2:"JD",},
    giovedi:{dichiarante1:"", task1:"food",dichiarante2:"", task2:"JD",},
    venerdi:{dichiarante1:"", task1:"food",dichiarante2:"", task2:"JD",},
    
  }
 
let giorniSettimana = ["lunedi","martedi","mercoledi","giovedi","venerdi"];

let priorityTasks = ["food","jas-dogane"];





  //FUNZIONI 
  function generaRandomDay(){
    randomDay=giorniSettimana[Math.floor(Math.random()*giorniSettimana.length)];
    return randomDay
  }; generaRandomDay()
  console.log(randomDay)
  
  function generaRandomTask(){
    giorniSettimana.forEach(function(el){    
      randomTasks=priorityTasks[Math.floor(Math.random()*priorityTasks.length)];      
      
    })
    return  randomTasks;
  }; 
  
  function generaRandomDichiarante(){
    giorniSettimana.forEach(function(el){    
      randomindex =nomiDichiaranti[Math.floor(Math.random()*nomiDichiaranti.length)];
    })
    return  randomindex;
  }; 
  
  
  //DICHIARAZIONE eventi  
  let boxScelta = document.querySelector(".text-scelta");
  let assegnatiButton = document.querySelector(".submit1");
  console.log(assegnatiButton);  
  let boxAssegnati = document.querySelector("#scelta-div3");
  var  clickGenerate = document.querySelector("#genera");
  console.log(clickGenerate);
  
  
  
  function assegnaGiorno(giorno){
    
    settimana[giorno].dichiarante1=generaRandomDichiarante();
    settimana[giorno].dichiarante2=generaRandomDichiarante(); 
    if(settimana[giorno].dichiarante1 === settimana[giorno].dichiarante2 && settimana[giorno].dichiarante1 === settimana[giorno].dichiarante1 ){
      settimana[giorno].dichiarante1=generaRandomDichiarante();
      settimana[giorno].dichiarante2=generaRandomDichiarante();
    } else if(settimana[giorno].task1 === "" && settimana[giorno].dichiarante1 === ""  ){
      settimana[giorno].dichiarante1=generaRandomDichiarante();
      settimana[giorno].dichiarante2=generaRandomDichiarante();
    }
    
  }
  let giorno = randomDay
  assegnaGiorno(giorno)  
  
for (giorno in settimana){
  if(giorno.task1===giorno.task2){
    assegnaGiorno(giorno)
  }
}

  //event listeners  
function onClick(){
  
  clickGenerate.addEventListener("click", function(event){    
    indiceRandomGiornaliero()
    boxScelta.innerHTML+= `<h2> il ${settimana.name} , ${settimana.dipendente} farà ${settimana.task}</h2>`
    
    
  });
}  

 
 
console.log(settimana) */

/* function esclusione(){
  
  switch (settimana.name) {
    case "lunedi":
      giorniSettimana.splice(0, 1,);
      console.log(giorniSettimana);    
        onClick()
        assegnaTask()
        break;
        case "martedi":
          giorniSettimana.splice(1, 1,);
          console.log(giorniSettimana);   
          onClick()
          assegnaTask() 
          break;
          case "mercoledi":
          giorniSettimana.splice(2, 1,);
          console.log(giorniSettimana);   
          onClick()
          assegnaTask() 
          break;
          case "giovedi":
          giorniSettimana.splice(3, 1,);
          console.log(giorniSettimana); 
          onClick()
          assegnaTask()   
          break;
          case "venerdi":
          giorniSettimana.splice(4, 1,);
          console.log(giorniSettimana);   
          onClick()
          assegnaTask() 
          break;
    
    
      default:""
      onClick()
      assegnaTask()
        break;
    }
    
  };esclusione();

 function assegnaTask(){
 
   assegnatiButton.addEventListener("click", function(event){
     event.preventDefault();         
     boxAssegnati.innerHTML += `<h2> Assegnato per ${settimana.name} , ${settimana.dipendente} a ${settimana.task}</h2>`;
     settimana={};
     boxScelta.innerHTML= "" ;       
     indiceRandomGiornaliero();

     assegnaPropriety();
     
     
                  
         
   })
   
 } 
 */
 
/* function assegnaPropriety(){

  giorniSettimana.forEach(function(e){
     
    settimana.name = randomDay;
    settimana.dipendente = randomindex;
    settimana.task =randomTasks;   
       
  })

};
assegnaPropriety(); */
  



  
  /*
//FUNZIONI

  //genera indice per array random 
    function generaRandomName(array, i ){ 
      let randomNameIndex = array[i];    
        
      return randomNameIndex;
    }
 

  //aggiunge all'array1 , l'elemento dell' array 2
    function aggiungiNome(array1,elemento){
      array1[randomindex].push(elemento);
      return array1

    };
  

  //nome generato casualmente
    let randomNameResult = generaRandomName(nomiDichiaranti,randomindex);
    console.log(randomNameResult);

  //assegnazione nome all'array settimana
    let giorniAssegnati = aggiungiNome(giorniSettimana,randomNameResult); 

  //genera compito da fare
    let randomTask = generaRandomName(priorityTasks,randomTasks);
    console.log(randomTask);

    console.log(giorniSettimana[randomindex]);

//aggiungi task   
     let compitiAssegnati = aggiungiNome(giorniSettimana,randomTask);
        console.log(compitiAssegnati)

       function assegnaNomeTask (){
        aggiungiNome(giorniSettimana,randomNameResult);
        aggiungiNome(giorniSettimana,randomTask);     
     }; 

 // console.log(giorniSettimana[randomindex]) 
     
     
 /*  function assegnaSettimana(){
        
      for (var i =0; i<giorniSettimana.length; i++){
      
        if (giorniSettimana[randomindex] === giorniSettimana[randomindex]) {continue;}
        assegnaNomeTask();
        return giorniSettimana[randomindex];      
      };

  } 
  */
 /*function laFinale(){
  for (var i=0; i<=priorityTasks.length; i++){    
     
    if (compitiAssegnati === compitiAssegnati) {continue;}
     
    giorniSettimana.fill(compitiAssegnati);
    console.log(giorniSettimana)
  /*    
    if (compitiAssegnati===giorniSettimana[randomindex] ||  (compitiAssegnati===randomTask) ) 
    {  console.log("riprova");
    
    } else {
     
    } */
     
/*     
  }
};  

 laFinale()
 console.log(giorniSettimana);
 giorniSettimana.forEach(function(el){
  randomNameResult = generaRandomName(nomiDichiaranti,randomindex)
  console.log(randomNameResult)
  

 }) */
 