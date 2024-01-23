//crea un array di numeri e scrivi una funzione per ottenere un nuovo array in cui
//ogni numero è raddoppiato

function raddoppiaNumeri(array) {
  const nuovoArray = array.map((numero) => numero * 2);
  return nuovoArray;
}
const res = raddoppiaNumeri([1, 6, 9, 5]);
console.log(res);

//2 filtraggio per lunghezza. Il .filter ha come parametro una funzione
//che restituisce o vero o falso.

function lunghezza(array2) {
  function filtra(parola, index, array) {
    if (parola.length >= 5) return true;
    else return false;
  }
  const nuovoArray2 = array2.filter(filtra);
  return nuovoArray2;
}

console.log(lunghezza(["castello", "pippirino", "puro"]));

//3 creare una funzione che sommi un array di numeri
function somma(numeri) {
  const nuovoArray = numeri.reduce(
    (accumulatore, addendo) => accumulatore + addendo,
    0
  );
  return nuovoArray;
}
const res3 = somma([1, 3, 6]);
console.log(res3);

function onReduce(acc, num) {
  return acc + num;
}

function sommaTotale(numeri) {
  const somma = numeri.reduce(onReduce, 0);
  return somma;
}
const ress3 = somma([1, 3, 6]);
console.log(ress3);

//dato un array di numeri raddoppia il valore di ogni numero pari

function onMap(element, index, array) {
  if (element % 2 === 0) return element * 2;
  else return element;
}

function raddoppiaNumeriPari(array5) {
  const arrayNumeriRaddoppiati = array5.map(onMap);
  return arrayNumeriRaddoppiati;
}
const res5 = raddoppiaNumeriPari([1, 2, 5, 8]);
console.log(res5);

//
function onFind(persona) {
  if (persona.età === 26) return true;
  else return false;
}
function trovaPersona(persone, età) {
  const elementoTrovato = persone.find(onFind);
  return elementoTrovato;
}
const res6 = trovaPersona([
  { name: "Riccardo", età: 26 },
  { name: "Gianni", età: 27 },
  { name: "Pippo", età: 28 },
]);

// 7 scrivi una funzione per trovare l'indice del primo numero in un array maggiore di 10

function onFindIndex(el) {
  if (el > 10) return true;
  else return false;
}

function trovaIndice(array) {
  const indexFound = array.findIndex(onFindIndex);
  return indexFound;
}

const res7 = trovaIndice([3, 7, 10, 14]);
console.log(res7);

// 8 dato una serie di numeri scrivi una funione per calcolare il prodotto di tutti i numeri dispari.

function onReduce(accumulatore, el, index, array) {
  if (el % 2 !== 0) {
    accumulatore = accumulatore * el;
    return accumulatore;
  } else return accumulatore;
}

function prodottoNumeriDispari(numbers) {
  const total = numbers.reduce(onReduce, 1);
  return total;
}

let res8 = prodottoNumeriDispari([1, 2, 3, 4, 5, 6, 7]);
console.log(res8);

// 9 data una lista di oggetti scrivi una funzione per incrementare l'età di ogni oggetto di 1 anno
// ... = spread (fa la copia)
function onMap2(element) {
  //const obj = {...element}
  //obj.eta = obj.eta + 1;
  //return {...element, eta: }
  return { ...element, eta: element.eta + 1 };
}

function incrementaEtaDiUno(studenti) {
  const newArray = studenti.map(onMap2);
  return newArray;
}
let res9 = incrementaEtaDiUno([
  {
    name: "Joshua",
    eta: 40,
  },
  {
    name: "Frank",
    eta: 45,
  },
]);
console.log(res9);

//10 Conteggio occorrenze: dato un array di stringhe, scrivi una gunzione
//che restituisca un oggetto che conta quante volte ogni stringa appare nell'array.

function onReduce(acc, el, index, array) {
  if (acc[el]) {
    acc[el] = acc[el] + 1;
    return acc;
  } else {
    acc[el] = 1;
    return acc;
  }
}

function trovaOccorrenze(words) {
  const occorrenze = words.reduce(onReduce, {});
  return occorrenze;
}

const res10 = trovaOccorrenze([
  "Joshua",
  "Riccardo",
  "Lorenzo",
  "Giorgio",
  "Joshua",
]);
console.log(res10);
// 11 scrivi una funzione per creare un nuovo array da un array di numeri, contenente solo quelli che sono sia pari sia maggiori di 10.

function numeriParieMaggiori(array) {
  function filtra(numeri, index, array) {
    if (numeri % 2 === 0 && numeri >= 10) return true;
    else return false;
  }
  const nuovoArray2 = array.filter(filtra);
  return nuovoArray2;
}

console.log(numeriParieMaggiori(["8", "11", "10", "12"]));

// scrivi una funzione che dato un numero n, restituisca un array che contenga i numeri da 1 a n

function test(n) {
  let sequence = [];
  for (i = 1; i < n; i++) {
    sequence = [...sequence, i];
  }
  return sequence;
}

//dato un array e un valore specifico scrivi una funzione che rimuova tutte le istanze di quel valore dall'array.

function rimuovi(m, array) {
  return array.filter((k) => k != m);
}
console.log(rimuovi(6, [1, 2, 3, 6, 7]));
