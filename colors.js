// JavaScript for window resize
window.addEventListener('resize', function () {
    window.resizeTo(400, 662);
});

// JavaScript for handling navigation
const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
    item.addEventListener('click', activeLink));

// Wait until the DOM is fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function () {
    // Select all navigation links in the list
    const navigationLinks = document.querySelectorAll('.navigation .list');

    // Add a click event to each navigation link
    navigationLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Prevent the default behavior of the link (navigation to the new page)
            event.preventDefault();

            // Add a short delay (e.g., 300 milliseconds) before changing the page
            setTimeout(() => {
                // Change the page location to the destination of the link
                window.location.href = link.querySelector('a').getAttribute('href');
            }, 500);
        });
    });

    // Select the Sizes buttons in the middle of the screen
    const sizesButtons = document.querySelectorAll('.buy-1, .buy-2, .buy-3, .buy-4');

    // Add a click event to each Sizes button in the middle of the screen
    sizesButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            // Prevent the default behavior of the button
            event.preventDefault();

            // Find the corresponding Pay link in the navigation and simulate a click
            const payNavLink = document.querySelector('.navigation .list:nth-child(4)'); // Assuming Pay is the fourth item
            payNavLink.click();
        });
    });
});
