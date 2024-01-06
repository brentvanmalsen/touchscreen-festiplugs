import SplitTextJS from 'split-text-js';
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

    // Importeer SplitTextJS binnen de script-tag met type="module"


    const titles = gsap.utils.toArray('.text-wrapper p');
    const tl = gsap.timeline();

    titles.forEach(title => {
        const splitTitle = new SplitTextJS(title);

        tl
            .from(splitTitle.chars, {
                opacity: 0,
                y: 80,
                rotateX: -90,
                stagger: 0.02
            }, "<")
            .to(splitTitle.chars, {
                opacity: 0,
                y: -80,
                rotateX: 90,
                stagger: 0.02
            }, "<1");
    });
});
