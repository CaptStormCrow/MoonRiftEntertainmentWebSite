// ===================== GAMES TEMPLATE =====================

// data for all games, modify as needed
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
