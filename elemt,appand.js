const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const firstImage =document.querySelector('img')
const paragraph = document.createElement('p')


// paragraph.innerText="hello"
// paragraph.classList.add('my-class')

// container.append(paragraph)
// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))

// ✅print multiple cards
// const card = document.querySelector(".card");

// for (let i = 2; i <= 100; i++) {
//   const newCard = card.cloneNode();
//   newCard.innerText = i;
//   container.append(newCard);
// }


// ✅creat element
// 1 april 26

// const paragraph = document.createElement('p')
// paragraph.innerText='Hello'
// paragraph.classList.add('my-class')
// container.append(paragraph)

// ✅ add pocky img

// for(let i=1; i<=100; i++){
//     const imgContainer =document.createElement('div')
//     imgContainer.classList.add('img-container')
//     const newImg = document.createElement('img')
//     const newParagraph = document.createElement('p')
//     newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     newParagraph.innerText=i
//     imgContainer.append(newImg,newParagraph)
//     container.append(imgContainer)
// }


// ✅ childremove and remove


// const container = document.querySelector('.container')
// const card = document.querySelector('.card')

// container.removeChild(card);
// let arr = [10, 20, 30, 40,50];

// arr.splice(1, 1);

// console.log(arr);