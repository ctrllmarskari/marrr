const text = "Charles jelek,charles brewokan";
let index = 0;

function ketik() {
    if (index < text.length) {
        document.getElementById("text").innerHTML += text.charAt(index);
        index++;
        setTimeout(ketik, 100);
    }
}

function buatHati() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function mulaiCinta() {
    document.getElementById("lagu").play();
    setInterval(buatHati, 300);
}

window.onload = ketik;
