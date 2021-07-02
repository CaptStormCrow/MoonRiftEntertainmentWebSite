/* 
  Scripts that is relevant for components that appear on all pages
  such as the navigation bar and footer.
 */

// =============== FOOTER SOCIAL MEDIA ICONS TEMPLATE ===============
const relPath = './assets/icons/social-media/';
const iconData = [
  {
    link: 'https://www.facebook.com/MoonRiftEntertainment/',
    imagePath: `${relPath}036-facebook-silver.svg`
  },
  {
    link: 'https://twitter.com/MoonRiftLLC/',
    imagePath: `${relPath}008-twitter-silver.svg`
  },
  {
    link: 'https://www.youtube.com/channel/UCECOpIunnDsx0vtFu5Uqaow',
    imagePath: `${relPath}001-youtube-silver.svg`
  },
  {
    link: 'https://www.instagram.com/MoonRiftEntertainment/',
    imagePath: `${relPath}029-instagram-silver.svg`
  },
];

function addSocials(templateId) {
  const socialsList = document.getElementById('footer-socials');
  const fragment = document.getElementById(templateId);
  socialsList.innerHTML = '';
  iconData.forEach(icon => {
    const instance = document.importNode(fragment.content, true);

    instance.querySelector('.footer-social-link').href = icon.link;
    instance.querySelector('.footer-social-icon').src = icon.imagePath;
    
    socialsList.appendChild(instance);
  });  
}

addSocials('footer-social-template');