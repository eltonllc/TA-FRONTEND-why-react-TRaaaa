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
    let li = ele("li", undefined, element.name);
    let a = ele("a", undefined, element.toWatch ? "watched" : "Towatch");
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

function ele(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (const key in attr) {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child == "object") {
      element.append(child);
    } else {
      element.append(document.createTextNode(child));
    }
  });
  return element;
}

form.addEventListener("submit", handler);
