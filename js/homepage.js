// ================ FEATURED SECTION SCRIPTS ================
// Might need text or other data so featuredData is an array of objects
const featuredData = [
  {
    image: "./images/slideshow/tk2.jpg",
  },
  {
    image: "./images/slideshow/soul_guard.jpg",
  },
  {
    image: "./images/slideshow/soul_guard_screenshot.gif",
  },
  {
    image: "./images/slideshow/kiwi2.jpg",
  },
  {
    image: "./images/slideshow/kiwi.jpg",
  },
];

var timer;
var slideId = 0;
setCarouselImage(slideId);

function nextSlide() {
  slideId++;
  if (slideId > featuredData.length - 1) {
    slideId = 0;
  }
  setCarouselImage(slideId);
}

function setCarouselImage(id) {
  // Change background image to slide id
  let featuredImage = document.getElementById("featured-img");
  changeBg(featuredImage, featuredData[id].image);
  // Go to next slide every set interval
  clearTimeout(timer);
  timer = setTimeout(() => nextSlide(), 8 * 1000);
}

// Change background of element 'el' to 'imgPath'
function changeBg(el, imgPath) {
  let imgString = "url(" + imgPath + ")";
  el.style.background = imgString;
  el.style.backgroundPosition = "center";
  el.style.backgroundRepeat = "no-repeat";
  el.style.backgroundSize = "contain";
}

// ===================== NEWS TEMPLATE =====================
const newsData = [
  {
    title: "Soul Guard Released!",
    date: "April 30, 2021",
    summary:
      "Soul Guard, an action adventure 3D game, is now available on itch.io!",
    image:
      "https://img.itch.zone/aW1nLzU4MjAyNDIucG5n/315x250%23c/5pGN%2FO.png",
  },
  {
    title: "Soul Guard - Update",
    date: "March 18, 2021",
    summary:
      "Team Soul Guard has been actively creating the groundwork for the Soul Guard to release on April 30th, 2021. More to come soon!",
    image:
      "https://img.itch.zone/aW1nLzU4MjAyNDIucG5n/315x250%23c/5pGN%2FO.png",
  },
  {
    title: "Toy Kingdom 2 - Update",
    date: "March 18, 2021",
    summary:
      "Toy Kingdom 2 is due to launch on March 18th, 2021. Toy Kingdom 2 is a sequel that has a lightning power system as well as combat with creatures of the Toy Kingdom world.",
    image: "https://img.itch.zone/aW1nLzU0NTk5MTAucG5n/315x250%23c/BqPfbN.png",
  },
];

function addNews(templateId) {
  const newsList = document.getElementById("news");
  const fragment = document.getElementById(templateId);

  // Clear out content
  newsList.innerHTML = "";

  // Loop over game data and modify the given template
  newsData.forEach((post) => {
    // Create an instance of the template content
    const instance = document.importNode(fragment.content, true);

    // Add relevant content to the template
    instance.querySelector(".post-date").innerHTML = post.date;
    instance.querySelector(".post-title").innerHTML = post.title;
    instance.querySelector(".post-summary").innerHTML = post.summary;
    instance.querySelector(".post-thumbnail").src = post.image;

    // Append the instance ot the DOM
    newsList.appendChild(instance);
  });
}

addNews("news-template");

// ===================== GAMES TEMPLATE =====================
const gameData = [
  {
    title: "Kiwi",
    genres: "Arcade",
    price: "FREE TO PLAY",
    image: "https://img.itch.zone/aW1nLzYxNTY2MDgucG5n/315x250%23c/ay6JFm.png",
    link: "./pages/game_pages/kiwi.html",
  },
  {
    title: "Soul Guard",
    genres: "Action, Adventure, 3D",
    price: "FREE TO PLAY",
    image:
      "https://img.itch.zone/aW1nLzU4MjAyNDIucG5n/315x250%23c/5pGN%2FO.png",
    link: "./pages/game_pages/soulguard.html",
  },
  {
    title: "Toy Kingdom 2",
    genres: "Sandbox, 3D",
    price: "$4 USD",
    image: "https://img.itch.zone/aW1nLzU0NTk5MTAucG5n/315x250%23c/BqPfbN.png",
    link: "./pages/game_pages/tk2.html",
  },
  {
    title: "Toy Kingdom",
    genres: "Sandbox, 3D",
    price: "FREE TO PLAY",
    image: "https://img.itch.zone/aW1nLzUxODcxNjUucG5n/315x250%23c/IcKa2U.png",
    link: "./pages/game_pages/tk1.html",
  },
];

function addGames(templateId) {
  const gamesList = document.getElementById("games");
  const fragment = document.getElementById(templateId);

  // Clear out content
  gamesList.innerHTML = "";

  // Loop over game data and modify the given template
  gameData.forEach((game) => {
    // Create an instance of the template content
    const instance = document.importNode(fragment.content, true);

    // Add relevant content to the template
    instance.querySelector(".game-item").href = game.link;
    instance.querySelector(".game-card-title").innerHTML = game.title;
    instance.querySelector(".genres").innerHTML = game.genres;
    instance.querySelector(".price").innerHTML = game.price;
    instance.querySelector(".thumbnail").src = game.image;

    // Append the instance ot the DOM
    gamesList.appendChild(instance);
  });
}

addGames("game-template");
