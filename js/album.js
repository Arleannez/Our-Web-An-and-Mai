const gallery = document.getElementById("gallery");
const imageUrlInput = document.getElementById("imageUrl");
const previewImg = document.getElementById("previewImg");

// Load saved images from localStorage
let savedImages = JSON.parse(localStorage.getItem("albumImages")) || [];

savedImages.forEach(url => {
  createImage(url);
});

// Live preview when typing URL
imageUrlInput.addEventListener("input", () => {
  const url = imageUrlInput.value.trim();
  if (url) {
    previewImg.src = url;
    previewImg.style.display = "block";
  } else {
    previewImg.style.display = "none";
  }
});

// Add image to gallery
function addImage() {
  const url = imageUrlInput.value.trim();
  if (!url) {
    alert("Please paste an image URL");
    return;
  }

  savedImages.push(url);
  localStorage.setItem("albumImages", JSON.stringify(savedImages));

  createImage(url);

  imageUrlInput.value = "";
  previewImg.style.display = "none";
}

// Create image element
function createImage(url) {
  const img = document.createElement("img");
  img.src = url;
  img.onclick = () => openViewer(img);
  gallery.appendChild(img);
}

// Viewer (your existing logic)
function openViewer(img) {
  document.getElementById("viewer").style.display = "flex";
  document.getElementById("viewerImg").src = img.src;
}

function closeViewer() {
  document.getElementById("viewer").style.display = "none";
}

// Back button
function goBack() {
  window.location.href = "home.html"; // change if needed
}
