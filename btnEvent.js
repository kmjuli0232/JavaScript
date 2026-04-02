const container =document.querySelector('.container')
const card = document.querySelector('.card')

let i= 1
 function copyCard(){
     const newcontainer = document.createElement('div')
     newcontainer.innerText = i++;
     newcontainer.classList.add('card')
     container.append(newcontainer)
 }
 card.addEventListener('click',copyCard)

