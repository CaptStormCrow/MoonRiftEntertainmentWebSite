// ===================== MOONJAMS TEMPLATE =====================
// data for all moonjams, modify as needed
const gameData = [
  {
    title: "Kiwi",
    genres: "Arcade",
    price: "FREE TO PLAY",
    image: "https://img.itch.zone/aW1nLzYxNTY2MDgucG5n/315x250%23c/ay6JFm.png",
    link: "./pages/game_pages/kiwi.html",
  },
  {
    title: "Foo-dyssey",
    genres: "Platformer",
    price: "FREE TO PLAY",
    image: "https://img.itch.zone/aW1nLzU5MzYyOTYucG5n/original/G9%2BRn2.png",
    link: "https://moonrift.itch.io/moonjam-class-3",
  },
  {
    title: "Whim of the Wind",
    genres: "Exploration, Puzzle",
    price: "FREE TO PLAY",
    image: "https://img.itch.zone/aW1nLzU5MzYzMDMucG5n/original/3q5C5b.png",
    link: "https://moonrift.itch.io/moonjam-class-3",
  },
  {
    title: "Keeper of the Winds",
    genres: "Action, Platformer",
    price: "FREE TO PLAY",
    image: "https://img.itch.zone/aW1nLzU5MzYzODQucG5n/original/Nad1CX.png",
    link: "https://moonrift.itch.io/moonjam-class-3",
  },
  {
    title: "Ground Effect",
    genres: "Racing, 3D",
    price: "FREE TO PLAY",
    image: "https://img.itch.zone/aW1nLzU5MzYzODgucG5n/original/pS8njR.png",
    link: "https://moonrift.itch.io/moonjam-class-3",
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

// ===================== TESTIMONIAL TEMPLATE =====================
// data for testimonials, modify as needed
const testimonialData = [
  {
    text: "This is a great group of people to interact with. You can tell how much they enjoy seeing people progress through the weeks. If you are still new to game designing, this is a great starting point.",
    author: "Larson",
  },
  {
    text: "MoonRift provides a genuine experience at game design that is accessible to people with any level of experience or interest in Game Design. Learning hands-on with similar minded people provides exposure to the game development world that isn't like learning from a video or a classroom, giving you the opportunity to find your passion in the field.",
    author: "Barrineu",
  },
  {
    text: "If you’re looking for an amazing chance to grow your skill sets alongside equally amazing people, come join the rocket to the moon at MoonRift Entertainment and see what you can accomplish. :)",
    author: "Zwick",
  },
  {
    text: "The amount of experience that I gained in 6 weeks was exponential. I enjoyed having a friendly competition with everyone which in turn led to a finished game that I'm more than happy to put on my resume. MoonRift was fair and easy to work with, I would definitely recommend being an intern for them.",
    author: "Udave",
  },
  {
    text: "Moonrift is a great place to meet new connections, team build and make great games together.",
    author: "Sierra",
  },
  {
    text: "Are you ready to make an amazing video game that your friends, family, and the world will be amazed by? If so, consider joining MoonRift today! I loved my experience here, I really can't recommend this program enough.",
    author: "Bryant",
  },
];

function addTestimonials(templateId) {
  const testimonialList = document.getElementById("testimonials");
  const fragment = document.getElementById(templateId);
  testimonialList.innerHTML = ""; // Clear out content
  // Render content from JSON data
  testimonialData.forEach((testimonial) => {
    const instance = document.importNode(fragment.content, true);
    instance.querySelector(".testimonial-text").innerHTML = testimonial.text;
    instance.querySelector(".testimonial-author").innerHTML =
      testimonial.author;
    testimonialList.appendChild(instance);
  });
}

addTestimonials("testimonial-template");
