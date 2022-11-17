const DOMSelectors = {
  songtitle: document.getElementById("title"),
  artistname: document.getElementById("artist"),
  imageurl: document.getElementById("imageurl"),
  makecard: document.getElementById("create"),
  box: document.getElementById("box"),
  container: document.getElementById("container"),
  display: document.querySelector("display"),
  delete: document.getElementById("delete"),
};

DOMSelectors.makecard.addEventListener("click", function () {
  let songtitle = DOMSelectors.songtitle.value;
  let artistname = DOMSelectors.artistname.value;
  let imageurl = DOMSelectors.imageurl.value;

  DOMSelectors.container.insertAdjacentHTML(
    "afterbegin",
    `<div class="display">
      <image src></image>
      <h1 class="songtitles">${songtitle}</h1>
      <h2 class="artists">${artistname}</h2>
      <img src="${imageurl}" class="myImage"alt="">
      THERE SHOULD BE A BUTTON HERE BUT IDK HOW TO ADD IT PROPERLY
    </div>`
  );
});
