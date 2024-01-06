// JavaScript for window resize
window.addEventListener('resize', function () {
    window.resizeTo(400, 662);
  });
  // I did 400x662 because my code makes a 400x600 window, however
  // when I resize the windows it automatically shrunk in vertical size just
  // a little bit. This is why I made the resizeTo 62 pixels bigger than
  // the original size of the window to compensate for the height loss.
  

// JavaScript for handling navigation
const list = document.querySelectorAll('.list');
function activeLink() {
  list.forEach((item) =>
    item.classList.remove('active'));
  this.classList.add('active');
}
list.forEach((item) =>
  item.addEventListener('click', activeLink));
