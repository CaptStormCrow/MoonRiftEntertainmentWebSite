// ===================== SOCIAL MEDIA ICONS TEMPLATE =====================
const relPath = '../../assets/icons/social-media/';
const iconData = [
  {
    link: 'https://moonrift.itch.io/kiwi',
    imagePath: `${relPath}001-youtube.svg`
  },
  {
    link: 'https://moonrift.itch.io/kiwi',
    imagePath: `${relPath}008-twitter.svg`
  },
  {
    link: 'https://moonrift.itch.io/kiwi',
    imagePath: `${relPath}029-instagram.svg`
  },
];

function addNews(templateId) {
  const socialsList = document.getElementById('socials');
  const fragment = document.getElementById(templateId);
  
  // Clear out content
  socialsList.innerHTML = '';
  
  // Loop over icon data and modify the given template
  iconData.forEach(icon => {
    // Create an instance of the template content
    const instance = document.importNode(fragment.content, true);

    // Add relevant content to the template
    instance.querySelector('.social-link').href = icon.link;
    instance.querySelector('.social-icon').src = icon.imagePath;

    // Append the instance ot the DOM
    socialsList.appendChild(instance);
  });  
}

addNews('social-media-template');