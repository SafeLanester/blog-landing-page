document.addEventListener("DOMContentLoaded", function() {
    const animation1 = document.querySelectorAll('animation1 span');
    const heroImage = document.getElementById('animation2');
    const card = document.getElementById('#VibratingCard');
    
    function playGlow(animationSpans, index = 0) {
        animationSpans.forEach(span => span.classList.remove('active'));
        if (index < animationSpans.length) {
            animationSpans[index].classList.add('active');
            index++;
        } else {
            index = 0;
            return;
        }
        setTimeout(() => playGlow(animationSpans, index), 100); // Adjust the timing as needed
    }
    
    function startGlow() {
        playGlow(animation1);
    }

    function startSpin() {
        heroImage.style.animationPlayState = 'running';
    }
    
    function startVibrate() {
        card.classList.add('active');
        setTimeout(() => card.classList.remove('active'), 5000); // Stop vibrating after 5 seconds
    }
    
    function startAnimations() {
        startGlow();
        startSpin();
        startVibrate();
    }

    startAnimations();
    setInterval(startAnimations, 30000); // Repeat every 30 seconds
});
