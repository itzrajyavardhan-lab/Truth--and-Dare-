
// Page redirect
function goToSecond() {
    window.location.href = "second-page.html";
}
// Page redirect
function goToDare() {
    window.location.href = "Dare-page.html";
}
// Page redirect
function goTohaanji() {
    window.location.href = "haanji.html";
}
// Page redirect
function goToCaring() {
    window.location.href = "Caring.html";
}
// Page redirect
function goToHonest() {
    window.location.href = "honest.html";
}
// Page redirect
function goToSmile() {
    window.location.href = "smile.html";
}

setInterval(createHeart, 300);


function floate() {
    const noBtn = document.getElementById("noBtn");

    noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});
}


