// import { saveAs } from 'file-saver';
const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));

window.addEventListener("load", function () {
  document
    .querySelector('input[type="file"]')
    .addEventListener("change", function () {
      if (this.files && this.files[0]) {
        var img = document.querySelector("img"); // $('img')[0]
        img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        img.onload = imageIsLoaded;
      }
    });
});

function imageIsLoaded() {
  console.log(this.src);
}

var btn = document.getElementById("download");
btn.onclick = function () {
  domtoimage
    .toBlob(document.getElementById("download-image"))
    .then(function (blob) {
      window.saveAs(blob, "download-image.png");
    });
};
