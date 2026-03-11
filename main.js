/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

//Chiedere all’utente di inserire una parola
const word = prompt("inserisci una parola");

//Creare una funzione per capire se la parola inserita è palindroma
//First method 
function palindroma(userWord) {
    const reverseWord = userWord.split('').reverse().join('')
    console.log(reverseWord);
    if (reverseWord.toLowerCase() === userWord.toLowerCase()) {
        return true
    }
    return false


}
if (palindroma(word)){
    console.log('Your word is a palidron');
    
}else{
    console.log('Your word is not a palidron');
    
}
// Second method
// split/reverse/join

function splitWord(userWord){
    const chars= [];
    for(let i = 0; i<userWord.length;i++) {
        const thisChar = userWord[i];
        chars.push(thisChar);
    }return chars
}

/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

