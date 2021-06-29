 // ===================== TESTIMONIAL TEMPLATE =====================

// data for all games, modify as needed
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

function addGames(templateId) {
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

addGames('testimonial-template');