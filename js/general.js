/* 
  Scripts that is relevant for components that appear on all pages
  such as the navigation bar and footer.
 */

// ===================== INCLUDE HTML COMPONENTS =====================
// Source: https://www.w3schools.com/howto/howto_html_include.asp

function includeHTML() {
  return new Promise(function (resolve) {
    console.log("start includeHTML");
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4) {
            if (this.status == 200) {
              elmnt.innerHTML = this.responseText;
            }
            if (this.status == 404) {
              elmnt.innerHTML = "Page not found.";
            }
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("include-html");
            includeHTML();
          }
        };
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
    console.log("end includeHTML");
    resolve();
  });
}

// =============== SIDENAV ===============
var isSidenavOpen = false;

function toggleSidenav() {
  if (isSidenavOpen) closeSidenav();
  else openSidenav();
}

// Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav_push
function openSidenav() {
  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  isSidenavOpen = true;
}

function closeSidenav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  isSidenavOpen = false;
}

// =============== FOOTER SOCIAL MEDIA ICONS TEMPLATE ===============
const relPath = "../assets/icons/social-media/";
const iconData = [
  {
    link: "https://www.facebook.com/MoonRiftEntertainment/",
    imagePath: `${relPath}036-facebook-silver.svg`,
  },
  {
    link: "https://twitter.com/MoonRiftLLC/",
    imagePath: `${relPath}008-twitter-silver.svg`,
  },
  {
    link: "https://www.youtube.com/channel/UCECOpIunnDsx0vtFu5Uqaow",
    imagePath: `${relPath}001-youtube-silver.svg`,
  },
  {
    link: "https://www.instagram.com/MoonRiftEntertainment/",
    imagePath: `${relPath}029-instagram-silver.svg`,
  },
];

function addFooterSocials(templateId) {
  return new Promise(function (resolve) {
    console.log("start addFooterSocials");
    const socialsList = document.getElementById("footer-socials");
    const fragment = document.getElementById(templateId);
    socialsList.innerHTML = "";
    iconData.forEach((icon) => {
      const instance = document.importNode(fragment.content, true);

      instance.querySelector(".footer-social-link").href = icon.link;
      instance.querySelector(".footer-social-icon").src = icon.imagePath;

      socialsList.appendChild(instance);
    });
    console.log("end addFooterSocials");
    resolve();
  });
}

// Load footer
includeHTML(); //.then(addFooterSocials("footer-social-template"));
