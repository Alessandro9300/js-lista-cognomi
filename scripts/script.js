// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova

alert("Utilizzare la lettera maiuscola quando si inserisce il cognome");


// creo array cognomi

var listaCognomi = ["Andreoli","Findus","Zaia","Rossi","Conte","Menegazzi"];

// creo la variabile prompt

var promptUtente = prompt("Inserire il proprio cognome");


// gli dico di pushare la variabile creata col prompt

listaCognomi.push(promptUtente);


console.log(listaCognomi);

// ordino alfabeticamente la lista creata dopo aver pushato la nuova variabile

listaCognomi.sort();

console.log(listaCognomi);

// chiedo la posizione all'interno dell'array della variabile aggiunta dopo

var pos = listaCognomi.indexOf(promptUtente);

console.log(pos);

// gli dico di stampare la lista

for (var i = 0; i < listaCognomi.length; i++){

  // creo variabile che cicla gli output

  var outputId = listaCognomi[i];

  console.log(outputId);

  // creo una variabile che prende quello già stampato

  var returnHTML = document.getElementById('id').innerHTML;

  console.log(returnHTML);

  // stampo tutto quello che viene ciclato

  document.getElementById('id').innerHTML = returnHTML + " " + outputId;

}

document.getElementById('id-2').innerHTML = "Utente, il tuo cognome è il numero " + (pos + 1) + " in ordine alfabetico in una lista di " + listaCognomi.length + " cognomi";
