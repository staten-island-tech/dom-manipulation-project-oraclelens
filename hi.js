const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("box"),
  point: document.querySelectorAll(".point"),
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "pink";
  text.textContent = "This is pink now";
  text.style.fontSize = "40px";
}

DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});
