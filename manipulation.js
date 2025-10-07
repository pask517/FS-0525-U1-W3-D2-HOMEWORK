// 2) DOM MANIPULATION
// la manipolazione del DOM consiste in una serie di tecniche(metodi e proprietà)
// che ci permettono di alterare il contenuto della pagina,elemento per elemento

// - cambiare un valore testuale di un elemento
// recuperare il riferimento all'H1 della pagina tramite il suo id:
const title = document.getElementById("main-title")
console.log("TITLE", title)
// ora ne cambiamo il CONTENUTO TESTUALE
console.log(title.innerText) //innerText rappresenta il contenuto testuale
// racchiuso tra il tag di apertura e il tag di chiusura dell'elemento
title.innerText = "EPIBlog"

// - cambiare il contenuto HTML di un elemento
// recupero il riferimento alla lista "secondary-menu"
const secondUl = document.getElementById("secondary-menu")
console.log(secondUl.innerHTML) // funziona in lettura
// ... e anche in scrittura!
//secondUl.innerHTML = `
//<li>UNO<li>
//<li>DUE<li>
//<li>TRE<li>
//`
secondUl.innerHTML += `
<li>Terzo elemento</li>
`

//-assegnare una proprietà CSS ad un elemento, con uno style inline
// seleziono il primo paragrafo con classe "content-section"
const par = document.getElementsByClassName("content-section")[0]
console.log("par", par)
// dopo aver selezionato un elemento, la proprietà da utilizzare per applicare
// uno stile inline si chiama "style"
par.style.color = "red"
par.style.fontSize = "1.2em"
par.style.borderWidth = "2px"
par.style.borderStyle = "solid"
par.style.borderColor = "green"
// dentro style sono presenti TUTTE le proprietà CSS, ricordatevi che quelle
// che hanno un - nel nome(tipo font-size) vanno scritte in camelCase(fontSize)

// assegniamo delle CLASSI CSS ad un elemento
// dopo aver selezionato un elemento HTML potete interagire con le sue proprietà
// classList
const centrami = () => {
  let contatti =
    document.getElementsByClassName("special")[
      document.getElementsByClassName("special").length - 1 //seleziono SEMPRE l'ultimo
    ]

  // ho trovato un'ancora,ma devo trovare la classe "special" a suo padre,l'li
  contatti = contatti.parentElement //ora è diventatol'li

  // applichiamo a contatti la classe "center" definita in CSS
  contatti.classList.add("center")
}

// lavorare con gli attributi dei tag HTML
// recupero il link nel footer
const link = document.querySelector("footer a")
// con la proprietà "getAttribute" voi potete leggere il valore di un determinato attributo
console.log(link.getAttribute("href"))

// con la proprietà "setAttribute" potete creare un attributo nuovo per un elemento
// diamo un "id" a questo link
link.setAttribute("id", "footerLink")

// fino ad adesso abbiamo operato su elementi PRESENTI nella pagina...
// ... ma con JS potete creare da ZERO ELEMENTI NUOVI!

// per creare un elemento da 0, si utilizza un metodo su document che si chiama
// "createElement"

// creiamo da 0 una lista ordinata con 3 valori
// creo innanzitutto la ul
const newOl = document.createElement("ol") // <ol></ol>
// ora devo riempire la newOl
newOl.innerHTML = `
<li>Giallo</li>
<li>Verde</li>
<li>Rosso</li>
`

// una volta creato un elemento da 0, bisogna INSERIRLO nella pagina
// ci sono tanti modi per inserire gli elementi DOVE VOLETE VOI!

// appendChild inserisce un elemento dentro un parent in ultima posizione
const main = document.getElementsByTagName("main")[0]
main.appendChild(newOl)

const thirdSection = document.getElementById("third-section")

main.insertBefore(newOl, thirdSection)

// appendChild inserisce un elemento IN FONDO a quelli già presenti nel padre
const newLi = document.createElement("li")
newLi.innerText = "NUOVO LINK"
newLi.setAttribute("id", "newLi")

// seleziono la lista ul padre
//const mainUl = document.getElementById("main-ul") //riferimento alla ul padre
//mainUl.appendChild(newLi)

// ELIMINA UN ELEMENTO
// newOl.remove() // KABOOM

// ESERCIZI:
// Metti in grassetto tutti gli <li> della lista dei colori
const makeColorsBold = () => {
  // 1) recuperare gli elementi
  // li selezioniamo con il fatto che sono figli di una ol dentro il main
  const allTheLi = document.querySelectorAll("main ol li")
  console.log(allTheLi)
  //   2) manipolarli
  // alltheLI.style.fontWeight = "bold" <-- NON FUNZIONA PERCHè allTheLi è UNA NODELIST
  for (let i = 0; i < allTheLi.length; i++) {
    allTheLi[i].style.fontWeight = "bold"
  }
  // visto che querySelectorAll torna una Nodelist è anche possibile utilizzare forEach
  allTheLi.forEach((li) => {
    li.style.fontWeight = "bold"
  })
}
makeColorsBold()
