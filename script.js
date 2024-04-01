function toggleMusic(musicSrc, buttonId) {
    console.log('toggleMusic function called');
    var audio = document.getElementById('music');
    console.log(audio);
    var button = document.getElementById(buttonId);
    
    if (audio.paused) {
        audio.src = musicSrc;
        audio.play();
        button.textContent = 'Pause Music';
        button.classList.remove('play');
        button.classList.add('pause');
    } else {
        audio.pause();
        button.textContent = 'Play Music';
        button.classList.remove('pause');
        button.classList.add('play');
    }
}

function submitForm() {
    var formData = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        sex: document.getElementById("sex").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value,
        class: document.getElementById("class").value
    };

    fetch('https://formspree.io/f/mrgnalzn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (response.ok) {
            alert('Form submitted successfully.');
            document.getElementById("appointmentForm").reset();
        } else {
            alert('Failed to submit form.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to submit form.');
    });
}

function toggleVideo(videoType) {
    var videoContainer = document.getElementById(videoType + 'Container');
    var videoButton = document.getElementById(videoType + 'Button');
    var closeButton = document.getElementById(videoType + 'CloseButton');

    if (videoContainer.innerHTML === '') {
        videoContainer.innerHTML = '<iframe width="560" height="315" src="../videos/' + videoType + '.mp4" frameborder="0" allowfullscreen></iframe>';
        videoContainer.style.display = 'block';
        videoContainer.style.position = 'fixed';
        videoContainer.style.top = '50%';
        videoContainer.style.left = '50%';
        videoContainer.style.transform = 'translate(-50%, -50%)';
        videoContainer.style.zIndex = '9999';

        videoButton.innerText = 'Close Video';

        closeButton.style.display = 'block';
    } else {
        videoContainer.innerHTML = '';
        videoContainer.style.display = 'none';

        videoButton.innerText = 'Watch Video';

        closeButton.style.display = 'none';
    }
}

function closeVideo(videoType) {
    var videoContainer = document.getElementById(videoType + 'Container');
    var videoButton = document.getElementById(videoType + 'Button');
    var closeButton = document.getElementById(videoType + 'CloseButton');

    videoContainer.innerHTML = '';
    videoContainer.style.display = 'none';

    videoButton.innerText = 'Watch Video';

    closeButton.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        submitRegister();
    });
});

function submitRegister() {
const name = document.getElementById('name').value;
const surname = document.getElementById('surname').value;
const sex = document.querySelector('input[name="sex"]:checked');
const age = document.getElementById('age').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const role = document.getElementById('role').value;
const interests = document.querySelectorAll('input[type="checkbox"]:checked');

if (!name.trim() || !surname.trim() || !sex || !age || !email.trim() || !password.trim() || !role) {
    alert('Please fill in all required fields.');
    return;
}

if (!sex) {
    alert('Please select your gender.');
    return;
}

if (interests.length === 0) {
    alert('Please select at least one interest.');
    return;
}

if (isNaN(age) || age <= 0) {
    alert('Please enter a valid age.');
    return;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!email.match(emailPattern)) {
    alert('Please enter a valid email address.');
    return;
}

if (password.length < 8) {
    alert('Password must be at least 8 characters long.');
    return;
}

const formData = {
    name,
    surname,
    sex: sex.value,
    age,
    email,
    password,
    role,
    interests: Array.from(interests).map(interest => interest.value)
};
localStorage.setItem('formData', JSON.stringify(formData));

window.location.href = 'login.html';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedData = localStorage.getItem('formData');
    if (!storedData) {
        document.getElementById('loginMessage').textContent = 'No user registered. Please sign up first.';
        return;
    }

    const userData = JSON.parse(storedData);

    if (email === userData.email && password === userData.password) {
        window.location.href = 'profile.html';
    } else {
        document.getElementById('loginMessage').textContent = 'Incorrect email or password.';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const circle = document.getElementById('circle');
    const square = document.querySelector('.square');

    // Function to handle breathing cycle animation
    function breathe() {
        circle.style.animationDuration = '10s'; // Set animation duration to match keyframes duration
        setTimeout(() => {
            circle.style.animationDuration = '5s'; // Set animation duration back to 5s for breathing cycle
        }, 10000); // After 10s (total animation duration)
    }

    setInterval(breathe, 10000); // Repeat breathing cycle every 10s
});



