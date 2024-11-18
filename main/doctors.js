var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

let isDefaultFont = true;

function toggleFont() {
    const textElement = document.getElementById("myText");

    if (isDefaultFont) {
        textElement.style.fontFamily = "Courier New, monospace";
    } else {
        textElement.style.fontFamily = "Arial, sans-serif";
    }

    isDefaultFont = !isDefaultFont;
}

let isSorted = localStorage.getItem("isSorted") === "true";
let originalOrder = [];

document.addEventListener("DOMContentLoaded", function() {
    const doctorContainer = document.querySelector(".doctor-list");
    originalOrder = Array.from(doctorContainer.querySelectorAll(".doctor-card"));

    if (isSorted) {
        sortDoctorsByExperience();
    }
});

function toggleSort() {
    if (isSorted) {
        revertToOriginalOrder();
        localStorage.setItem("isSorted", "false");
    } else {
        sortDoctorsByExperience();
        localStorage.setItem("isSorted", "true");
    }

    isSorted = !isSorted;
}

function sortDoctorsByExperience() {
    const doctorContainer = document.querySelector(".doctor-list");
    const doctorCards = Array.from(doctorContainer.querySelectorAll(".doctor-card"));

    doctorCards.sort((a, b) => {
        const experienceA = parseInt(a.querySelector("p:nth-of-type(2)").textContent.match(/\d+/)[0]);
        const experienceB = parseInt(b.querySelector("p:nth-of-type(2)").textContent.match(/\d+/)[0]);
        return experienceA - experienceB;
    });

    doctorCards.forEach(card => doctorContainer.appendChild(card));
}

function revertToOriginalOrder() {
    const doctorContainer = document.querySelector(".doctor-list");
    originalOrder.forEach(card => doctorContainer.appendChild(card));
}



function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
  }