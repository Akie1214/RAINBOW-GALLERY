function upDate(previewPic) {
  // Check that the event is triggering
  console.log("Mouse over triggered");
  console.log("Alt text:", previewPic.alt);
  console.log("Image source:", previewPic.src);

  // Get the div with id="image"
  var imageDiv = document.getElementById("image");

  // Change the text to the alt text
  imageDiv.innerHTML = previewPic.alt;

  // Change background image
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  var imageDiv = document.getElementById("image");

  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}

/* -----------------------------
   NEW REQUIRED CODE
--------------------------------*/

// Add event listener for page load
window.addEventListener("load", addTabFocus);

function addTabFocus() {
  // console log to confirm event triggers
  console.log("Page loaded. Adding tabindex to images.");

  // get all preview images
  var images = document.querySelectorAll(".preview");

  // loop through images
  for (var i = 0; i < images.length; i++) {
    // add tabindex attribute
    images[i].setAttribute("tabindex", i + 1);

    // console log each image
    console.log("Tabindex added to image", i + 1);
  }
}