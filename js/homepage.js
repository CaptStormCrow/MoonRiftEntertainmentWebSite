const gameData = [
  { 
    title: 'Soul Guard', 
    genres: 'Action, Adventure, 3D',
    price: 'FREE TO PLAY', 
    image: 'https://img.itch.zone/aW1nLzU4MjAyNDIucG5n/315x250%23c/5pGN%2FO.png', 
    link: 'https://moonrift.itch.io/soul-guard' 
  },
  { 
    title: 'Toy Kingdom 2', 
    genres: 'Sandbox, 3D', 
    price: '$4 USD', 
    image: 'https://img.itch.zone/aW1nLzU0NTk5MTAucG5n/315x250%23c/BqPfbN.png', 
    link: 'https://moonrift.itch.io/toy-kingdom-2' 
  },
  { 
    title: 'Toy Kingdom', 
    genres: 'Sandbox, 3D', 
    price: 'FREE TO PLAY', 
    image: 'https://img.itch.zone/aW1nLzUxODcxNjUucG5n/315x250%23c/IcKa2U.png',
    link: 'https://moonrift.itch.io/toy-kingdom' 
  },
];

function addGames(templateId) {
  const gamesList = document.getElementById('games');
  const fragment = document.getElementById(templateId);
  
  // Clear out content
  gamesList.innerHTML = '';
  
  // Loop over game data and modify the given template
  gameData.forEach(game => {
    // Create an instance of the template content
    const instance = document.importNode(fragment.content, true);

    // Add relevant content to the template
    instance.querySelector('.game-item').href = game.link;
    instance.querySelector('.title').innerHTML = game.title;
    instance.querySelector('.genres').innerHTML = game.genres;
    instance.querySelector('.price').innerHTML = game.price;
    instance.querySelector('.thumbnail').src = game.image;

    // Append the instance ot the DOM
    gamesList.appendChild(instance);
  });  
}

addGames('game-template');