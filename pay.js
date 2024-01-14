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

    // Select the OK button in the popup
    const okButton = document.querySelector('#popup button');

    // Add a click event to the OK button
    okButton.addEventListener('click', function () {
        // Simulate a click on the Completed link in the navigation
        const completedNavLink = document.querySelector('.navigation .list:nth-child(5)'); // Assuming Completed is the fifth item
        completedNavLink.click();
    });
});

// JavaScript for the popup
function openPopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}

function closePopup() {
    // You can leave this function empty, or perform any other actions you want
}
