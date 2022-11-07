const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input`),
};

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  console.log(input);
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  DOMSelectors.input.value = "";
});

/*
const cat = "meow";

DOMSelectors.box.insertAdjacentHTML("afterend", `<h1>We are a ${cat}</h1>`);
*/
/*
const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("box"),
  points: document.querySelectorAll(".points"),
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "pink";
  text.textContent = "This is pink now";
  text.style.fontSize = "40px";
}

DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});

function changeLi() {
  let pointIndex = 1;
  DOMSelectors.points.forEach((point) => {
    point.addEventListener("click", function () {
      point.textcontent = `Hello I am ${pointIndex}`;
      pointIndex++;
    });
  });
}
changeLi(); */
