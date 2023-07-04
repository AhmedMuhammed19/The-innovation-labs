let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 1000
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});
let togglebtn = document.querySelector(".menu-bar");
let links = document.querySelector("ul.small");

togglebtn.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-bar-active");
  links.classList.toggle("open");
};
links.onclick = function (e) {
  e.stopPropagation();
};

