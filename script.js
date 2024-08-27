let img = document.getElementById("bounceImage");
let images = ["./pc.jpg"]; // Add paths to your images here
let currentIndex = 0;
let posX = 0;
let posY = 0;
let speedX = 2;
let speedY = 2;
let imgWidth = img.width;
let imgHeight = img.height;

function bounceImage() {
  // Update position
  posX += speedX;
  posY += speedY;

  // Check for collision with edges
  if (posX + imgWidth >= window.innerWidth || posX <= 0) {
    speedX = -speedX;
    changeImage();
  }

  if (posY + imgHeight >= window.innerHeight || posY <= 0) {
    speedY = -speedY;
    changeImage();
  }

  // Apply the new position
  img.style.left = posX + "px";
  img.style.top = posY + "px";

  requestAnimationFrame(bounceImage);
}

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  img.src = images[currentIndex];
}

// Start the animation
bounceImage();
