const images = document.querySelector("img");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((Response) => Response.json())
    .then((json) => {
      console.log(json);
      images.src = json.message;
    });
});

const images = document.querySelector("img");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  setTimeout(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        images.src = json.message;
      });
  }, 2000); // 2 sec delay
});

const images = document.querySelector("img");
const button = document.querySelector("button");

let lastClickTime = 0;

button.addEventListener("click", () => {
  const now = Date.now();

  // अगर 3 sec के अंदर दुबारा click हुआ
  if (now - lastClickTime < 3000) {
    console.log("Wait करो... API blocked 🚫");
    return;
  }

  // update time
  lastClickTime = now;

  // API call
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      images.src = data.message;
    });
});

