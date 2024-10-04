// // var album = document.querySelector("#album");
// const album = document.getElementById("album");
// var getVal = function (elem, style) {
//   return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
// };
// var getHeight = function (item) {
//   return item.querySelector(".content").getBoundingClientRect().height;
// };
// var resizeAll = function () {
//   var altura = getVal(album, "grid-auto-rows");
//   var gap = getVal(album, "grid-row-gap");
//   album.querySelectorAll(".album-item").forEach(function (item) {
//     var el = item;
//     el.style.gridRowEnd =
//       "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
//   });
// };
// album.querySelectorAll("img").forEach(function (item) {
//   item.classList.add("byebye");
//   if (item.complete) {
//     console.log(item.src);
//   } else {
//     item.addEventListener("load", function () {
//       var altura = getVal(album, "grid-auto-rows");
//       var gap = getVal(album, "grid-row-gap");
//       var gitem = item.parentElement.parentElement;
//       gitem.style.gridRowEnd =
//         "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
//       item.classList.remove("byebye");
//     });
//   }
// });
// window.addEventListener("resize", resizeAll);
// album.querySelectorAll(".album-item").forEach(function (item) {
//   item.addEventListener("click", function () {
//     item.classList.toggle("full");
//   });
// });

// Wait for the HTML body to finish loading
document.addEventListener("DOMContentLoaded", function () {
  // Get all images
  const images = document.querySelectorAll("img");

  // Create a modal to display the images
  const modal = document.createElement("div");
  modal.classList.add("modal");

  // Create a close button for the modal
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.classList.add("close-button");

  // Create a next button for the modal
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.classList.add("next-button");

  // Create a previous button for the modal
  const previousButton = document.createElement("button");
  previousButton.textContent = "Previous";
  previousButton.classList.add("previous-button");

  // Create an image element to display in the modal
  const modalImage = document.createElement("img");
  modalImage.classList.add("modal-image");

  // Add the close button, next button, previous button, and image to the modal
  modal.appendChild(closeButton);
  modal.appendChild(nextButton);
  modal.appendChild(previousButton);
  modal.appendChild(modalImage);

  // Add the modal to the body
  document.body.appendChild(modal);

  // Initialize the current image index
  let currentImageIndex = 0;

  // Function to display the modal with the current image
  function displayModal() {
    modal.style.display = "block";
    modalImage.src = images[currentImageIndex].src;
  }

  // Function to hide the modal
  function hideModal() {
    modal.style.display = "none";
  }

  // Function to go to the next image
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImage.src = images[currentImageIndex].src;
  }

  // Function to go to the previous image
  function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentImageIndex].src;
  }

  // Add event listeners to the images to display the modal when clicked
  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      currentImageIndex = index;
      displayModal();
    });
  });

  // Add event listeners to the close button, next button, and previous button
  closeButton.addEventListener("click", hideModal);
  nextButton.addEventListener("click", nextImage);
  previousButton.addEventListener("click", previousImage);

  // Add CSS styles to the modal
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.background = "rgba(0, 0, 0, 0.5)";
  modal.style.display = "none";
  modal.style.zIndex = "1000";

  // Add CSS styles to the close button
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.style.background = "none";
  closeButton.style.border = "none";
  closeButton.style.color = "white";
  closeButton.style.cursor = "pointer";
  closeButton.style.zIndex = "1001";

  // Add CSS styles to the next button
  nextButton.style.position = "absolute";
  nextButton.style.top = "50%";
  nextButton.style.right = "10px";
  nextButton.style.background = "none";
  nextButton.style.border = "none";
  nextButton.style.color = "white";
  nextButton.style.cursor = "pointer";
  nextButton.style.zIndex = "1001";

  // Add CSS styles to the previous button
  previousButton.style.position = "absolute";
  previousButton.style.top = "50%";
  previousButton.style.left = "10px";
  previousButton.style.background = "none";
  previousButton.style.border = "none";
  previousButton.style.color = "white";
  previousButton.style.cursor = "pointer";
  previousButton.style.zIndex = "1001";

  // Add CSS styles to the modal image
  modalImage.style.position = "absolute";
  modalImage.style.top = "50%";
  modalImage.style.left = "50%";
  modalImage.style.transform = "translate(-50%, -50%)";
  modalImage.style.maxWidth = "80%";
  modalImage.style.maxHeight = "80%";
  modalImage.style.zIndex = "1001";
});
