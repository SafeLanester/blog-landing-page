document.addEventListener("DOMContentLoaded", function() {
    const animation1 = document.querySelectorAll('#animation1 span');
    const heroImage = document.getElementById('Animation2');
    //const cards = document.querySelectorAll('.vibrating'); // Selecting all vibrating cards
    
    function playGlow(animationSpans, index = 0) {
        animationSpans.forEach(span => {
            span.classList.remove('active');
            // Re-trigger glow animation
            span.style.animationName = 'none';
            setTimeout(() => {
                span.style.animationName = 'glow';
            }, 10);
        });
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
        heroImage.style.animationName = 'none';
        setTimeout(() => {
            heroImage.style.animationName = 'spin';
        }, 10); // Quick reset to re-trigger the animation 
    }

    // function startVibrate() {
    //     cards.forEach(card => {
    //         card.classList.add('active');
    //         setTimeout(() => card.classList.remove('active'), 5000); // Stop vibrating after 5 seconds
    //     });
    // }

    function startAnimations() {
        startGlow();
        startSpin();
        //startVibrate();
    }

    // Delay the initial animation start by 30 seconds
    setTimeout(function() {
        startAnimations();
        // After the initial delay, repeat animations every 30 seconds
        setInterval(startAnimations, 30000);
    }, 30000); // Initial delay of 30 seconds
});
// Load the Twitter widget script
document.addEventListener('DOMContentLoaded', function() {
    var twitterScript = document.createElement('script');
    twitterScript.type = 'text/javascript';
    twitterScript.async = true;
    twitterScript.src = 'https://platform.twitter.com/widgets.js';
    twitterScript.charset = 'utf-8';
    document.head.appendChild(twitterScript);

    console.log('Twitter widget script loaded.');
});

// Load the Facebook SDK script
document.addEventListener('DOMContentLoaded', function() {
    var fbScript = document.createElement('script');
    fbScript.type = 'text/javascript';
    fbScript.async = true;
    fbScript.defer = true;
    fbScript.crossOrigin = 'anonymous';
    fbScript.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0';
    document.head.appendChild(fbScript);

    console.log('Facebook SDK script loaded.');
});

// Form to JSON
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch('https://script.google.com/macros/s/AKfycbyDyqSOgWOMCErj6LCkMH-u1uIRV1Zvpq5dYqoNJc96lHTyVdq3KeaOOWffYXe69KqI/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            alert('Form submitted successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error submitting the form');
        });
    });
});
function doPost(e) {
    var response = ContentService.createTextOutput();
    response.setMimeType(ContentService.MimeType.JSON);
    response.setContent(JSON.stringify({status: 'success'}));
    
    // Add CORS headers
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    return response;
  }
  

// This file can contain any additional JavaScript you might want to add
console.log('Page is fully loaded');
