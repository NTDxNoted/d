function upDate(previewPic) {
  console.log("Event triggered: upDate");
  console.log("Image alt:", previewPic.alt);
  console.log("Image src:", previewPic.src);

  const imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
  console.log("Event triggered: undo");

  const imageDiv = document.getElementById("image");
  imageDiv.innerHTML = "Hover over an image below to display here.";
  imageDiv.style.backgroundImage = "url('')";
}
