let form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];

function createUi(arr) {
  let ui = arr.map((element) => {
    return (
      <li>
        {element.name}
        <a>{element.toWatch ? "watched" : "Towatch"}</a>
      </li>
    );
  });
  ReactDOM.render(ui, ul);
}

function handler(event) {
  if (form.elements.text.value !== "") {
    event.preventDefault();
    let watchList = {
      name: form.elements.text.value,
      toWatch: false,
    };
    userInfo.push(watchList);
    form.elements.text.value = "";
    createUi(userInfo);
  }
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
}

ul.addEventListener("click", watched);

function watched(event) {
  if (event.target.tagName === "A") {
    let index = [...document.querySelectorAll("li")].indexOf(
      event.target.parentElement
    );
    userInfo[index].toWatch = !userInfo[index].toWatch;
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    createUi(userInfo);
  }
}

createUi(userInfo);

form.addEventListener("submit", handler);
