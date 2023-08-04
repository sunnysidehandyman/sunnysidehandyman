// nav bar stickied to top of page when scrolling
window.onscroll = function() {myFunction()};
// get nav bar
var navbar = document.getElementById("Navbar");
var sticky = navbar.offsetTop;
// add sticky class to navbar when reaching scroll position, remove sticky when leaving scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
