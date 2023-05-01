const githubBtn = document.getElementById("githubBtn");
const ytBtn = document.getElementById("ytBtn");
const linkedinBtn = document.getElementById("linkedinBtn");
const instagramLink = document.getElementById("instagramLink");
const twitterLink = document.getElementById("twitterLink");

let openNewTab = (url) => {
  let win = window.open(url, "_blank");
  win.focus();
};

githubBtn.addEventListener("click", () => {
  openNewTab("https://github.com/salashiram");
});

ytBtn.addEventListener("click", () => {
  openNewTab("https://www.youtube.com/@salashiram/featured");
});

linkedinBtn.addEventListener("click", () => {
  openNewTab("https://www.linkedin.com/in/hiram-salas/");
});

instagramLink.addEventListener("click", () => {
  openNewTab("https://www.instagram.com/salashiram/");
});

twitterLink.addEventListener("click", () => {
  openNewTab("https://twitter.com/salashiram31");
});
