const gallery = document.getElementById("gallery");
const imageUrlInput = document.getElementById("imageUrl");
const previewImg = document.getElementById("previewImg");

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
  window.location.href = "Home.html"; // change if needed
}

