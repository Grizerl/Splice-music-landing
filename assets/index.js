'use strict';

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll to position 5000 on page load
    window.scrollTo(0, 5000);

    // Smooth scroll for anchor links
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const blockId = anchor.getAttribute('href').substring(1);
            const blockElement = document.getElementById(blockId);
            if (blockElement) {
                blockElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            } else {
                console.warn(`Element with id ${blockId} not found.`);
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const preload = document.querySelector("[data-preload]");
    setTimeout(()=>{
         preload.classList.add("loaded");
    },400)
   
});
