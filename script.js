const quoteDom = document.querySelector("#quote");
const button = document.querySelector("button");
const quotes = [
  {
    quote: '"Ik zeg het niet vaak, ik zeg het niet veel"',
    img: "/assets/img/1.jpg",
  },
  { quote: '" Alle vrouwen zijn hoeren"', img: "/assets/img/2.jpg" },
  { quote: '" Gastje"', img: "/assets/img/3.jpg" },
  { quote: '" KDB, Kaat De Bock"', img: "/assets/img/4.jpg" },
  { quote: '" Wie Zennekik, Celine Blomme?"', img: "/assets/img/5.jpg" },
  { quote: '" Selligent, fuck yeah"', img: "/assets/img/6.jpg" },
  { quote: '" Els, oei sorry ik bedoel Ellen"', img: "/assets/img/7.jpg" },
];

class Beauke {
  constructor(quote, img) {
    this.quote = quote;
    this.img = img;
  }
  toDom() {
    quoteDom.innerHTML = "";
    const p = document.createElement("p");
    const img = document.createElement("img");
    p.innerText = this.quote;
    img.setAttribute("src", this.img);
    quoteDom.appendChild(img);
    quoteDom.appendChild(p);
  }
}

button.addEventListener("click", handleClick);
function handleClick() {
  const rand = Math.floor(Math.random() * quotes.length);
  console.log(rand);
  const beau = new Beauke(quotes[rand].quote, quotes[rand].img);
  beau.toDom();
}
