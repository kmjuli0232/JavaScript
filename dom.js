// const allImages = document.images;
//  const allImages = document.getElementsByTagName('img')
// const cssImage = document.getElementsByClassName('css-image');
// console.log(cssImage);
//  const cssImage = document.getElementById('css-image')
//  const cssImage = document.querySelectorAll('#css-image')
//  const cssImage = document.querySelector('.css-image')
// const jsImage = document.querySelector('[sameer="software"]');
// const img = document.querySelector("img");
const art = document.images[0].setAttribute("juli", "km");
const jsImage = document.querySelector(art);
console.log(jsImage);

// const jsimgs = document.querySelector('[juli="tingu"]');
// console.log(jsimgs);
// const ul = document.querySelector("ul");

//  const imageInsideUl = ul.querySelector('.css-image')
// debugger;
const allImages = document.querySelectorAll("img");
console.log(document.querySelectorAll("img"));

const imagesUrl = [
  "https://cdn.twocontinents.com/hfpqy_V7_B_IMG_Dubai_UAE_1200x800_e1936b3330.jpg",
  "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&ar=16%3A9&crop=faces&fit=crop",
  "https://img.freepik.com/free-photo/photo-camera-creative-design-icon_53876-125405.jpg?semt=ais_hybrid&w=740&q=80",
];

// allImages[0].src = imagesUrl[0]
// allImages[1].src = imagesUrl[1]
// allImages[2].src = imagesUrl[2]

// for (let i = 0; i < allImages.length; i++) {
//   allImages[i].src = imagesUrl[i];
// }

allImages.forEach((image, i) => {
  image.src = imagesUrl[i];
});
