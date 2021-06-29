// ===================== MOONJAMS TEMPLATE =====================
// data for all moonjams, modify as needed
const gameData = [
  { 
    title: 'Kiwi', 
    genres: 'Arcade',
    price: 'FREE TO PLAY', 
    image: 'https://img.itch.zone/aW1nLzYxNTY2MDgucG5n/315x250%23c/ay6JFm.png', 
    link: './pages/game_pages/kiwi.html' 
  },
  { 
    title: 'Soul Guard', 
    genres: 'Action, Adventure, 3D',
    price: 'FREE TO PLAY', 
    image: 'https://img.itch.zone/aW1nLzU4MjAyNDIucG5n/315x250%23c/5pGN%2FO.png', 
    link: 'https://moonrift.itch.io/soul-guard' 
  },
  { 
    title: 'Kiwi', 
    genres: 'Arcade',
    price: 'FREE TO PLAY', 
    image: 'https://img.itch.zone/aW1nLzYxNTY2MDgucG5n/315x250%23c/ay6JFm.png', 
    link: './pages/game_pages/kiwi.html' 
  },
  { 
    title: 'Soul Guard', 
    genres: 'Action, Adventure, 3D',
    price: 'FREE TO PLAY', 
    image: 'https://img.itch.zone/aW1nLzU4MjAyNDIucG5n/315x250%23c/5pGN%2FO.png', 
    link: 'https://moonrift.itch.io/soul-guard' 
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

 // ===================== TESTIMONIAL TEMPLATE =====================
 // data for testimonials, modify as needed
const testimonialData = [
  { 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    author: 'Author'
  },
  { 
    text: 'Lorem ipsum dolor sit amet',
    author: 'Another Author'
  },
  { 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    author: 'Placeholder Author'
  },
  { 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    author: 'Author with a long name'
  },
];

function addTestimonials(templateId) {
  const testimonialList = document.getElementById('testimonials');
  const fragment = document.getElementById(templateId);
  testimonialList.innerHTML = ''; // Clear out content
  // Render content from JSON data
  testimonialData.forEach(testimonial => {
    const instance = document.importNode(fragment.content, true);
    instance.querySelector('.testimonial-text').innerHTML = testimonial.text;
    instance.querySelector('.testimonial-author').innerHTML = testimonial.author;
    testimonialList.appendChild(instance);
  });  
}

addTestimonials('testimonial-template');