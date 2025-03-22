const lightboxElement = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-img");
const closeButton = document.getElementById("close-btn");

document.querySelectorAll(".thumbnail").forEach(function(el) {
    el.addEventListener("click", function() {
        lightboxImage.setAttribute("src", el.dataset.full);
        lightboxElement.style.display = "flex";
    });
});

closeButton.onclick = function() {
    lightboxElement.style.display = "none";
};