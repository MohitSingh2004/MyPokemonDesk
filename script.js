let warehouse = [];
let parentContainer = document.getElementById("data-Containers");
let showMore = document.getElementById("More-button");
let welcome = document.getElementById("startAnimation");
let mylogo = document.getElementById("Title");
let myfooter = document.getElementById("footer");

let cardsPerTurn = 10;
let currentcards = 0;

function showWelcome() {
  welcome.style.display = "block";
  mylogo.style.display = "none";
  showMore.style.display = "none";
}

function hideWelcome() {
  welcome.style.display = "none";
  mylogo.style.display = "block";
  showMore.style.display = "block";
}

async function myPokeApi() {
  showWelcome();
  let fetchData = await fetch(
    `https://pokemon-api-swart-zeta.vercel.app/?id=150`
  );
  let jsonData = await fetchData.json();
  warehouse = jsonData;
  setTimeout(() => {
    hideWelcome();
    ladle();
  }, 2700);
}

async function ladle() {
  if (warehouse.length === 0) {
    await myPokeApi();
  }
  let lastcards = currentcards + cardsPerTurn;

  for (let i = currentcards; i < lastcards && i < warehouse.length; i++) {
    let childcontainers = document.createElement("div");
    let img = document.createElement("img");
    let characterName = document.createElement("h2");

    characterName.innerText = warehouse[i].name;
    characterName.classList.add("pokemon-name");

    img.src = warehouse[i].image;
    childcontainers.classList.add("pokemon-box");

    childcontainers.appendChild(img);
    childcontainers.appendChild(characterName);

    parentContainer.appendChild(childcontainers);
  }
  currentcards += cardsPerTurn;
  if (currentcards >= warehouse.length) {
    showMore.style.display = "none";
  }
}
showMore.addEventListener("click", ladle);
myPokeApi();
// document.addEventListener("DOMContentLoaded", function () {
//   const lettersContainer = document.getElementById("footerlogo");
//   const word = "SENTI";

//   word.split("").forEach((letter, index) => {
//     const letterElement = document.createElement("p");
//     letterElement.textContent = letter;
//     letterElement.style.animationDelay = `${index * 0.2}s`;
//     lettersContainer.appendChild(letterElement);
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   AOS.init({
//     duration: 800,
//     easing: "ease-in-out",
//     once: true,
//   });

//   const lettersContainer = document.getElementById("letters-container");
//   const word = "SENTI";

//   word.split("").forEach((letter, index) => {
//     const letterElement = document.createElement("p");
//     letterElement.textContent = letter;
//     letterElement.setAttribute("data-aos", "fade-up");
//     letterElement.setAttribute("data-aos-delay", 700 + index * 100);
//     letterElement.setAttribute("data-aos-anchor-placement", "top-bottom");
//     lettersContainer.appendChild(letterElement);
//   });
// });

// window.addEventListener("scroll", () => {
//   let scrollPosition = window.innerHeight + window.scrollY;
//   let totalHeight = document.body.offsetHeight;

//   if (scrollPosition >= totalHeight - 500) {
//     ladle();
//   }
// });

// let warehouse = [];
// async function myPokeApi() {
//   let fetchData = await fetch(
//     `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0`
//   );
//   let jsonData = await fetchData.json();
//   jsonData.results.map((item) => {
//     warehouse.push(item.url);
//   });
// }

// async function mainData() {
//   await myPokeApi();
//   let Imgwarehouse = [];
//   let parentContainer = document.getElementById("data-Containers");

//   for (let i = 0; i < warehouse.length; i++) {
//     let fetchImage = await fetch(warehouse[i]);
//     let jsonImage = await fetchImage.json();
//     Imgwarehouse.push(jsonImage.sprites.other.dream_world.front_default);
//   }
//   console.log(Imgwarehouse);

//   for (let i = 0; i < Imgwarehouse.length; i++) {
//     let childcontainers = document.createElement("div");
//     let img = document.createElement("img");

//     img.src = Imgwarehouse[i];
//     img.style.width = "200px";
//     img.style.height = "200px";
//     childcontainers.appendChild(img);
//     childcontainers.classList.add("pokemon-box");
//     parentContainer.appendChild(childcontainers);
//   }
// }
// mainData().catch((error) => {
//   console.log("error", error);
// });
