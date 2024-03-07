document.addEventListener("DOMContentLoaded", function() {
    const curvedText = document.getElementById("curvedText");
    const text = "VIEW ALL PROPERTIES"; 
    const circle = document.querySelector(".circle");
    const circleDiameter = circle.offsetWidth;
    const radius = circleDiameter / 2;
    const angleStep = 180 / text.length; 

    const maxFontSize = Math.floor(circleDiameter / (text.length)) + 1;

    for (let i = 0; i < text.length; i++) {
        const letter = document.createElement("span");
        if (i < 0) {
            letter.textContent = text[i];
        } else {
            letter.textContent = text[text.length - i -1];
        }
        const angle = i * angleStep;
        const x = (radius * 0.9) * Math.cos((angle - 90) * Math.PI / 180); 
        const y = (radius * 0.9) * Math.sin((angle - 90) * Math.PI / 180); 
        const rotation = 90;

        letter.style.fontSize = `${maxFontSize}px`;

        letter.style.position = "absolute";
        letter.style.top = `calc(50% - ${maxFontSize / 2}px - ${y}px)`;
        letter.style.left = `calc(50% + ${x - maxFontSize / 2}px)`;
        letter.style.transformOrigin = "center";
        letter.style.transform = `rotate(${rotation}deg)`;
        
        curvedText.appendChild(letter);
    }
});
