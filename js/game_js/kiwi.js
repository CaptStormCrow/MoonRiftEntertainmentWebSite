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

function addSocials(templateId) {
  const socialsList = document.getElementById('socials');
  const fragment = document.getElementById(templateId);
  socialsList.innerHTML = '';
  iconData.forEach(icon => {
    const instance = document.importNode(fragment.content, true);

    instance.querySelector('.social-link').href = icon.link;
    instance.querySelector('.social-icon').src = icon.imagePath;

    socialsList.appendChild(instance);
  });  
}

addSocials('social-media-template');