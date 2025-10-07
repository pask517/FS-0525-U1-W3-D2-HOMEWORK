// --------------
// DOM TRAVERSING(selezione degli elementi nella pagina in JS)
// vediamo le principali tecniche che possiamo utilizzare per questo scopo:
console.log(document)

//come selezionare gli elementi del document
// a) tramite l'id dell'elemento
const h1 = document.getElementById("main-title")
console.log("TITOLO DELLA PAGINA", h1)
const footerParagraph = document.getElementById("copyright")
console.log("FOOTER COPYRIGHT", footerParagraph)

// b) tramite la classe degli elementi
const sectionParagraph = document.getElementsByClassName("content-section")
console.log(sectionParagraph)
// getElementsByClassNames() torna una COLLEZIONE DI ELEMENTI HTML (HTMLCollection)
// una specie di "ARRAY" contenente TUTTI gli elementi trovati con quella classe
// come in un array questa HTMLColection ha una length,che ci fornisce il numero
// di elementi trovati,e questi elementi sono identificati tramite una POSIZIONE
// che parte da 0 (esattamente come gli array).
// nel nostro caso i 3 paragrafi sono: paragraphs[0], paragraphs[1] e paragraphs[2]

const titles = document.getElementsByClassName("second-title")
console.log("TITLE 0", titles[0])
console.log("TITLE 1", titles[1]) // undefined,title ha lunghezza 1!

// HTMLCollection non è un vero e proprio array perchè nonostante sia ciclabile
// con un for non è dotato di metodi come push, pop, forEach, map, filter ecc.
// quindi è un array "PROLET"

// se vi serve aoolutamente in forEach o il map potete "convertire" una HTMLCollection
// a un vero e proprio array così:
const realArray = [...titles]
console.log(realArray)

// c) tramite il nome del tag degli elementi
const allTheParaghraphs = document.getElementsByTagName("p")
console.log("TUTTI I PARAGRAFI", allTheParaghraphs)
// getElementsByTagName torna anche lui SEMPRE una HTMLCollection
// stesso discorso di prima, è esplorabile con un for perchè tutti gli elementi
// sono dotati di indici(da0 fino a length-1); opzionalmente se vi servono
// tecniche avanzate (map,filter) potete trasformarlo in un vero e proprio array
// come nell'esempio precedente

//d) tramite un selettore CSS
// si può usare document.querySelector() per recuperare degli elementi particolarmente
// difficili da selezionare altrimenti
const pInsideMain = document.querySelector("main p")
console.log(pInsideMain)

//e) tramite un selettore CSS multiplo
const allPInsideMain = document.querySelectorAll("main p")
// querySelectorAll torna SEMPRE una NodeList, cioè una struttura iterabile
// sempre simile ad un array contenente i risultati richiesti.
// in caso di NESSUN risultato trovato,viene tornata una NodeList vuota.
// allPInsideMain è una NodeList,una struttura iterabile simile ad un array
// dotata di lunghezza e dove ogni elemento è caratterizzato da un indice,che
// parte da 0. Ė anche dotato del metodo forEach però NON contiene ad es. map
// filter,find ecc.
// Anche in questo caso, se vi servissero i metodi avanzati degli array elencati
// sopra potete facilmente convertire una NodeList in un vero e proprio array
// tramite lo spread operator
const realArray2 = [...allPInsideMain]
console.log(realArray2)

// una volta trovato un riferimento ad un elemento, potete ulteriormente
// attraversare la struttura del DOM grazie alla sua natura gerarchica:
const thirdListItem = document.querySelector("header ul li:nth-of-type(3)")
// thirdListItem è un riferimento al terzo elemento della lista all'interno di header
// è un HTMLElement -> UN OGGETTO
console.log(thirdListItem.parentElement.parentElement) // è possibile RISALIRE
// la struttura gerarchica con la proprietà "parentElement" (senza abusarne)
// è anche possibile esplorare i FIGLI di un elemento
const headerUl = document.getElementById("header-ul")
console.log(ul.children)
const stillTheThirdListItem = ul.children[2] //è sempre il terzo elemento della lista

headerUl.querySelector("li") // trova il PRIMO li all'interno della lista "header-ul"

// CLOSEST
headerUl.closest() // closest risale l'albero HTML fino a trovare un match con il selettore
//CSS che inserite al suo interno

// troviamo l'ancora "Bachelore" del quarto elemento di lista
const bacheloreAnchor = document.querySelector("header ul a:nth-of-type(4)")
// ora voglio risalire alla ul : sarebbe bacheloreAnchor.parentElement.parentElement,
// ma è brutto

// closest risale l'albero HTML fino a trovare un match con
// il selettore CSS che inserite al suo interno
bacheloreAnchor.closest("ul") // ho appena trovato il tag <ul>, che era nonno/bisnonno
// ecc. senza bisogno di risalire "le scale" a mano con i parentElement
