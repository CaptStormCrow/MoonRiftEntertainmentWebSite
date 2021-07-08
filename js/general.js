/* 
  Scripts that is relevant for components that appear on all pages
  such as the navigation bar and footer.
 */

// ===================== INCLUDE HTML COMPONENTS =====================
// Source: https://www.w3schools.com/howto/howto_html_include.asp

function includeHTML() {
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
}

// Load footer
includeHTML(); //.then(addFooterSocials("footer-social-template"));

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
