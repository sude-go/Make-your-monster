let hornsBtn = document.getElementById("horns-btn");
let tailBtn = document.getElementById("tail-btn");

let docRoot = document.querySelector(":root");

// change face
var faceOptions = document.getElementsByClassName("face-option");

function changeFace() {
    var faceSrc = this.getAttribute("src");
    var monsterFace = document.getElementById("face");
    monsterFace.setAttribute("src", faceSrc);
}

for (var i = 0; i < faceOptions.length; i++) {
    faceOptions[i].addEventListener("click", changeFace);
}

// change body color
let orange = document.getElementById("body-orange");
let purple = document.getElementById("body-purple");
let red = document.getElementById("body-red");
let yellow = document.getElementById("body-yellow");
let blue = document.getElementById("body-blue");
let green = document.getElementById("body-green");
let pink = document.getElementById("body-pink");
let gray = document.getElementById("body-gray");
let brown = document.getElementById("body-brown");


orange.addEventListener("click", function () {
    docRoot.style.setProperty("--color-monster", "#ffa711");
});

purple.addEventListener("click", function () {
    docRoot.style.setProperty("--color-monster", "#904ae8")
});

red.addEventListener("click", function () {
    docRoot.style.setProperty("--color-monster", "#ff4f51")
});

yellow.addEventListener("click", function () {
    docRoot.style.setProperty("--color-monster", "#f3d55b")
});

blue.addEventListener("click", function () {
    docRoot.style.setProperty("--color-monster", "#42aaff")
});

green.addEventListener("click", function () {
    docRoot.style.setProperty("--color-monster", "#a8d530")
});

pink.addEventListener("click", function () {
    docRoot.style.setProperty("--color-monster", "#ae759e")
});

gray.addEventListener("click", function () {
    docRoot.style.setProperty("--color-monster", "#6b7191")
})

brown.addEventListener("click", function () {
    docRoot.style.setProperty("--color-monster", "#B19470")
})


// change horn color
let hornOrange = document.getElementById("horn-orange");
let hornPurple = document.getElementById("horn-purple");
let hornRed = document.getElementById("horn-red");
let hornYellow = document.getElementById("horn-yellow");
let hornBlue = document.getElementById("horn-blue");
let hornGreen = document.getElementById("horn-green");
let hornPink = document.getElementById("horn-pink");
let hornGray = document.getElementById("horn-gray");
let hornBrown = document.getElementById("horn-brown");

hornOrange.addEventListener("click", function () {
    docRoot.style.setProperty("--color-horns", "#ffa711");
});

hornPurple.addEventListener("click", function () {
    docRoot.style.setProperty("--color-horns", "#904ae8")
});

hornRed.addEventListener("click", function () {
    docRoot.style.setProperty("--color-horns", "#ff4f51")
});

hornYellow.addEventListener("click", function () {
    docRoot.style.setProperty("--color-horns", "#f3d55b")
});

hornBlue.addEventListener("click", function () {
    docRoot.style.setProperty("--color-horns", "#42aaff")
});

hornGreen.addEventListener("click", function () {
    docRoot.style.setProperty("--color-horns", "#a8d530")
});

hornPink.addEventListener("click", function () {
    docRoot.style.setProperty("--color-horns", "#ae759e")
});

hornGray.addEventListener("click", function () {
    docRoot.style.setProperty("--color-horns", "#6b7191")
})

hornBrown.addEventListener("click", function () {
    docRoot.style.setProperty("--color-horns", "#B19470")
})

// tail color
let tailOrange = document.getElementById("tail-orange");
let tailPurple = document.getElementById("tail-purple");
let tailRed = document.getElementById("tail-red");
let tailYellow = document.getElementById("tail-yellow");
let tailBlue = document.getElementById("tail-blue");
let tailGreen = document.getElementById("tail-green");
let tailPink = document.getElementById("tail-pink");
let tailGray = document.getElementById("tail-gray");
let tailBrown = document.getElementById("tail-brown");

tailOrange.addEventListener("click", function () {
    docRoot.style.setProperty("--color-tail", "#ffa711");
});

tailPurple.addEventListener("click", function () {
    docRoot.style.setProperty("--color-tail", "#904ae8")
});

tailRed.addEventListener("click", function () {
    docRoot.style.setProperty("--color-tail", "#ff4f51")
});

tailYellow.addEventListener("click", function () {
    docRoot.style.setProperty("--color-tail", "#f3d55b")
});

tailBlue.addEventListener("click", function () {
    docRoot.style.setProperty("--color-tail", "#42aaff")
});

tailGreen.addEventListener("click", function () {
    docRoot.style.setProperty("--color-tail", "#a8d530")
});

tailPink.addEventListener("click", function () {
    docRoot.style.setProperty("--color-tail", "#ae759e")
});

tailGray.addEventListener("click", function () {
    docRoot.style.setProperty("--color-tail", "#6b7191")
})

tailBrown.addEventListener("click", function () {
    docRoot.style.setProperty("--color-tail", "#B19470")
})

const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");
tabs.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove("live");
        });
        e.target.classList.add("live");
        articles.forEach(function (article) {
            article.classList.remove("live");
        });
        const element = document.getElementById(id);
        element.classList.add("live");
    }
});