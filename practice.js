// DNA 🧬
// Codédex

const dnaPieces = ["A", "C", "G", "T"];

const myDNA = [];

for (let i = 0; i < 24; i++) {
    const pieceOne = Math.floor(Math.random() * dnaPieces.length);
    const pieceTwo = Math.floor(Math.random() * dnaPieces.length);
    const pieceThree = Math.floor(Math.random() * dnaPieces.length);
    
    myDNA.push(dnaPieces[pieceOne] + dnaPieces[pieceTwo] + dnaPieces[pieceThree]);
}

console.log(myDNA);

let cifre = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

let trocifreni = [];

for (let i = 1; i <=10; i++){
    let first = Math.floor(Math.random() * cifre.length);
    let second = Math.floor(Math.random() * cifre.length);
    let third = Math.floor(Math.random() * cifre.length);

    trocifreni.push(cifre[first] + cifre[second] + cifre[third]);
}

console.log(trocifreni);



let units = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let pass = [];

// pokusavam umesto da imam:
// let variable = Math.floor(Math.random() * varible.length); x10 sa razlicitim imenima
// da bude loop u loop ali umesto da mi izbaci
// ['3497497494', '4913shed93Aa'.... [10]], on mi zibaci cifru po cifru a ne kombinaciju

for (let i = 1; i <2; i++ ){
  for (let j = 1; j <=6; j++){
    let n1 = Math.floor(Math.random() * units.length);
  
    pass.push(units[n1]);
    
     }
}
console.log(pass);