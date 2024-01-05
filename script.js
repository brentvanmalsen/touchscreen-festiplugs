// Prevent the window from being enlarged or reduced.
window.addEventListener('resize', function () {
    window.resizeTo(400, 662);
});
// I did 400x662 because my code makes a 400x600 window, however
// when i resize the windows it automatically shrunk in vertical size just
// a little bit. This is why I made the resizeTo 62 pixels bigger than
// the original size of the window to compensate the hight loss.