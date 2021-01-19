let form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];

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

function createUi(arr) {
  ul.innerHTML = "";
  arr.forEach((element) => {
    let li = document.createElement("li");
    li.innerText = element.name;
    let a = document.createElement("a");
    a.innerText = element.toWatch ? "watched" : "Towatch";
    a.addEventListener("click", watched);
    li.append(a);
    ul.append(li);
  });
}

function watched(event) {
  let index = [...document.querySelectorAll("li")].indexOf(
    event.target.parentElement
  );
  userInfo[index].toWatch = !userInfo[index].toWatch;
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  createUi(userInfo);
}

createUi(userInfo);

form.addEventListener("submit", handler);
