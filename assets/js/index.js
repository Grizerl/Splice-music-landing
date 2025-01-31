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


document.addEventListener("DOMContentLoaded", () => {
    const preload = document.querySelector("[data-preload]");
    setTimeout(()=>{
         preload.classList.add("loaded");
    },400)
   
});

    document.addEventListener("DOMContentLoaded",()=>{
        document.getElementById('burger').addEventListener('click', function() {
        document.querySelector('.nav-bar-collapse').classList.toggle('show');
        
    });
    })
    


