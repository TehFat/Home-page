document.addEventListener("DOMContentLoaded", () => {
    
    // Typing Animation
    const typingAnimationElement = document.getElementById("typing-animation");

    const typingTexts = ["A Front-End Developer"];
    let textIndex = 0;
    let charIndex = 0;

    function playTypingAnimation() {
        if (charIndex < typingTexts[textIndex].length) {
            typingAnimationElement.textContent += typingTexts[textIndex][charIndex];
            charIndex++;
            setTimeout(playTypingAnimation, 200); // Speed of typing
        } else {
            setTimeout(() => {
                typingAnimationElement.textContent = "";
                charIndex = 0;
                playTypingAnimation();
            }, 1500); 
        }
    }

    playTypingAnimation();


    document.getElementById("about-popup").style.display = "none";
    // JavaScript to toggle the pop-up when "About" link is clicked
document.getElementById("about-link").addEventListener("click", function() {
    document.getElementById("about-popup").style.display = "flex";
});

// Close the pop-up when the close button is clicked
document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("about-popup").style.display = "none";
});

// Close the pop-up if the user clicks outside of the pop-up content
window.onclick = function(event) {
    if (event.target === document.getElementById("about-popup")) {
        document.getElementById("about-popup").style.display = "none";
    }
};

    
    document.addEventListener("mousemove", (e) => {
        // List of elements where we want to reduce the ripple effect
        const excludedSections = ["projects", "tools", "footer"];
    
        // Check if the mouse is over one of the excluded sections
        let targetElement = e.target;
        while (targetElement) {
            if (excludedSections.includes(targetElement.id) || targetElement.classList.contains("header")) {
                return; // Stop the ripple effect
            }
            targetElement = targetElement.parentElement;
        }
    
        const smoke = document.createElement("div");
        smoke.classList.add("ripple");
    
        // Randomize the size slightly for a more organic effect
        const size = Math.random() * 10 + 10; // Between 20px and 40px
        smoke.style.width = `${size}px`;
        smoke.style.height = `${size}px`;
    
        // Set position at cursor
        smoke.style.left = `${e.pageX}px`;
        smoke.style.top = `${e.pageY}px`;
    
        // Add ripple to body
        document.body.appendChild(smoke);
    
        // Remove after animation
        setTimeout(() => {
            smoke.remove();
        }, 1500); // Matches animation duration
    });
    


    // Starry Background Effect
    const canvas = document.getElementById("starsCanvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let stars = [];

    for (let i = 0; i < 150; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            speed: Math.random() * 0.5 + 0.1
        });
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    function animateStars() {
        stars.forEach(star => {
            star.y += star.speed;
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
            }
        });
        drawStars();
        requestAnimationFrame(animateStars);
    }

    drawStars();
    animateStars();
});


