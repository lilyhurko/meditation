function toggleMusic(musicSrc, buttonId) {
    var audio = document.getElementById('music');
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




