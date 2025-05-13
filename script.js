const books = [
  { 
	  title: "React Billionaire", 
	  pages: 250, 
	  author: {
		  name: 'Alice',
		  age: 35
	  },
	  available: false,
	  price: '101€',
	  tags: ['advanced', 'js', 'react', 'senior']
  },
  { 
	  title: "Advanced JS", 
	  pages: 500, 
	  author: {
		  name: 'Bob',
		  age: 20
	  },
	  available: true,
	  price: '25€',
	  tags: ['advanced', 'js', 'mid-senior']
  },
  { 
	  title: "CSS Secrets", 
	  pages: 320, 
	  author: {
		  name: 'Alice',
		  age: 17
	  },
	  available: true,
	  price: '8€',
	  tags: ['html', 'css', 'junior']
  },
  { 
	  title: "HTML Mastery", 
	  pages: 200, 
	  author: {
		  name: 'Charlie',
		  age: 50
	  },
	  available: false,
	  price: '48€',
	  tags: ['html', 'advanced', 'junior', 'mid-senior']
  },
];


/*
Snack 1 - Filtra e Modifica
Crea una funzione che somma due numeri.
Crea un array (longBooks) con i libri che hanno più di 300 pagine;
Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
Stampa in console ogni titolo nella console.


const longBooks = books.filter((book) => book.pages >= 300);
const longBooksTitles = longBooks.map((b) => b.title)
longBooksTitles.forEach((b) => {
    return console.log(b)
})
*/

/*
Snack 2 - Il primo libro scontato
Creare un array (availableBooks) che contiene tutti i libri disponibili.
Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).

const availableBooks = books.filter((b) => b.available === true);
const discountedBooks = availableBooks.map((b) => {
    const prezzo = parseInt(b.price);
    const discountedPrice = +(prezzo * 0.8).toFixed(2) + "euro";

    return {
        ...b,
        prezzoScontato:discountedPrice
    }
})
const fullPricedBook = discountedBooks.find((d) => {
    prezzoIntero = parseInt(d.price);
    return prezzoIntero % 1 === 0;
})
console.log(fullPricedBook)
*/


/*
Snack 3 - Ordinare gli Autori
Creare un array (authors) che contiene gli autori dei libri.
Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
Ordina l’array authors in base all’età, senza creare un nuovo array.
(se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)


const authors = books.map((b) => b.author);
//console.log(authors)
let areAuthorsAdults = console.log(authors.every(authors => authors.age > 18));

authors.sort((a,b) => {
	if(areAuthorsAdults === true){
		return a.age - b.age
	}else{
		return b.age - a.age
	}
})
console.log(authors)
*/

/*
Snack 4 - Calcola l’età media
Creare un array (ages) che contiene le età degli autori dei libri.
Calcola la somma delle età (agesSum) usando reduce.
Stampa in console l’età media degli autori dei libri.


const ages = books.map((b) => b.author.age);

const agesSum = ages.reduce((acc, curr) => {
return acc + curr;
}, 0)
console.log(agesSum);

ageAvg = agesSum / ages.length;
console.log(ageAvg)
*/

/*
Snack 5 (Bonus) - Raccogli i libri
Nota: Per accedere all'API utilizzare utilizzare l'url base:
http://localhost:5000/
al posto di:
https://freetestapi.com/api/v1
Ad esempio:
http://localhost:5000/destinations
per chiamare l'endpoint /destinations
Usando la l'API https://boolean-spec-frontend.vercel.app/freetestapi/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) 
che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
Testala con l’array [2, 13, 7, 21, 19] .
*/

//creo la funzione fetchjson per facilitarmi il lavoro e rendere il codice più snello, senza await perchè se no ottengo già la resolve
/*
async function fetchJson(url){
	const response = await fetch(url);
	const obj = response.json()
	return obj;
}


const endpoints = [2, 13, 7, 21, 19];
async function getBooks(arr){
const promises = arr.map((e) => {
	return fetchJson(`http://localhost:5000/books/${e}`)
})
 return Promise.all(promises)
.then(results => {
	console.log(results)
})
.catch((error) => {
	console.error(error);
})
}

getBooks(endpoints);


/*
Snack 6 (Bonus) - Ordina i libri
Crea una variabile booleana (areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.
Crea un array (booksByPrice) con gli elementi di books ordinati in base al prezzo (crescente).
Ordina l’array booksByPricein base alla disponibilità (prima quelli disponibili), senza creare un nuovo array.

let areThereAvailableBooks = console.log(books.some(b => b.available === true));


const booksByPrice = books.map((b) => b)
//Ho dovuto usare replace e trim per evitare problemi con il simbolo €, in quanto anche se stringa non potevo usare il localecomapre perchè non si tratta di ordinamento alfabetico.
booksByPrice.sort((a,b) =>  Number(a.price.replace("€", "").trim()) - Number(b.price.replace("€", "").trim()))

booksByPrice.sort((a,b) => {
	return a.available === true - b.available === false 
})
console.log(booksByPrice)
*/

/*
Snack 7 (Bonus) - Analizza i tag
Usa reduce per creare un oggetto (tagCounts) che conta quante volte ogni tag viene usato tra i libri.
*/

const tags = books.map((b) => b.tags);

let arrayDiTag = [];

const allArrTags = tags.forEach((t) => {
	arrayDiTag.push(...t);
})

//console.log(arrayDiTag)


const tagCounts = arrayDiTag.reduce((acc, curr) => {
	//se non esiste la chiave con il nome del tag, la creo e gli assegno 1. Se invece esiste già incremento di 1. come valoreiniziale ho messo un oggetto vuoto in quanto chiesto dalla consegna.
if(!acc[curr]){
	acc[curr] = 1
}else{
	acc[curr] += 1
}
return acc;
}, {})

console.log(tagCounts)







