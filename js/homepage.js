// ===================== NEWS TEMPLATE =====================
const newsData = [
  { 
    title: 'Soul Guard Released!',
    date: 'April 30, 2021',
    summary: 'Soul Guard, an action adventure 3D game, is now available on itch.io!',
    image: 'https://img.itch.zone/aW1nLzU4MjAyNDIucG5n/315x250%23c/5pGN%2FO.png'
  },
  { 
    title: 'Post Title',
    date: 'Month DD, 20XX',
    summary: 'Post summary...',
    image: 'https://img.itch.zone/aW1nLzU4MjAyNDIucG5n/315x250%23c/5pGN%2FO.png'
  },
];

function addNews(templateId) {
  const newsList = document.getElementById('news');
  const fragment = document.getElementById(templateId);
  
  // Clear out content
  newsList.innerHTML = '';
  
  // Loop over game data and modify the given template
  newsData.forEach(post => {
    // Create an instance of the template content
    const instance = document.importNode(fragment.content, true);

    // Add relevant content to the template
    instance.querySelector('.post-date').innerHTML = post.date;
    instance.querySelector('.post-title').innerHTML = post.title;
    instance.querySelector('.post-summary').innerHTML = post.summary;
    instance.querySelector('.post-thumbnail').src = post.image;

    // Append the instance ot the DOM
    newsList.appendChild(instance);
  });  
}

addNews('news-template');

// ===================== GAMES TEMPLATE =====================
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