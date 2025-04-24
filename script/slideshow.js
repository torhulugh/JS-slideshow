var slides = document.querySelectorAll(".slide");
var current = 0;
var total = slides.length;

var prevButton = document.querySelector("#previous");
var nextButton = document.querySelector("#next");

// Hide all slides and show the current one
function showSlide(index) {
  for (var i = 0; i < total; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}

// Next button
nextButton.addEventListener("click", function () {
  current++;
  if (current >= total) {
    current = 0;
  }
  showSlide(current);
});

// Previous button
prevButton.addEventListener("click", function () {
  current--;
  if (current < 0) {
    current = total - 1;
  }
  showSlide(current);
});

// Auto slide
function slideShow() {
  current++;
  if (current >= total) {
    current = 0;
  }
  showSlide(current);
}

// Start with the first slide visible
showSlide(current);

// Auto slide every 5 seconds
setInterval(slideShow, 5000);
