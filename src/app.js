// Code goes here
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const pictures = document.querySelectorAll(".picture");
const pictureFirst = pictures[0];
const pictureLast = pictures[pictures.length - 1];

function getActivePicture() {
  return document.querySelector(".picture.active");
}

function getNextPicture(elm) {
  let sibling = pictureFirst;

  if (elm.nextElementSibling) {
    sibling = elm.nextElementSibling;
  }

  return sibling;
}

function getPrevPicture(elm) {
  let sibling = pictureLast;

  if (elm.previousElementSibling) {
    sibling = elm.previousElementSibling;
  }

  return sibling;
}

function getPictureIndex(elm) {
  return elm.getAttribute("data-index");
}

// set a new active pic
function setActivePicture(activePicture, elm) {
  const elmIndex = getPictureIndex(elm);
  const activeDot = document.querySelector(".dot.active");
  const connectedDot = document.getElementById("dot-" + elmIndex);

  activePicture.classList.remove("active");
  activeDot.classList.remove("active");

  elm.classList.add("active");
  connectedDot.classList.add("active");
}

arrowLeft.addEventListener("click", e => {
  const activePicture = getActivePicture();
  const prevPic = getPrevPicture(activePicture);

  setActivePicture(activePicture, prevPic);
});

arrowRight.addEventListener("click", e => {
  const activePicture = getActivePicture();
  const nextPic = getNextPicture(activePicture);

  setActivePicture(activePicture, nextPic);
});
