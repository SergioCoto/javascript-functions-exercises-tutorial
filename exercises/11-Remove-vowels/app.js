const rapid = (myString) => { //entra la palabra John
let consonants = []; //Creo un nuevo array donde almacenare mis consonantes
for(let position in myString){ //inicio iterador for en donde creo la variable position que hace referencia a myString = John
//position = 0
//position = 1
//position = 2
//John[0] = J
//John[1] = o
//John[2] = h
if(['a','e','i','o','u'].includes(myString[position].toLowerCase()) == false) {

consonants.push(myString[position].toUpperCase()) //Array o arreglo
//[].push(J.toUpperCase() = J)
//['J'].push(h.toUpperCase() = H)
//['J', 'H']
}
//['J', 'H']
}
return consonants.join(''); // Array transformado en string
//['J'] => 'J'
//['J'] => 'J'
//['J', 'H'] => 'JH'
}

// From this line up Do not change code below
let str = "John";
console.log(rapid(str));