import './style.css'
import { getItems } from "./items.js";

const availableItems = document.querySelector('#available-items');
const cart = document.querySelector('#cartList');
const cartItems = [];
function coucou() {
  console.log("coucou");
}

getItems().then((data)=>{
  console.log(data);
  for(let item of data){
    console.log(item);
    const li = document.createElement('li');
    //const h3 = document.createElement('h3');
    //const img = document.createElement('img');
    //img.setAttribute("src", item.imageUrl); 
    //img.src = item.imageUrl;
    //h3.textContent = item.name;
    li.classList.add('item');
    //li.appendChild(h3);
    //li.appendChild(img);
    //availableItems.appendChild(li);
    li.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}"/>
      <h3>${item.name}</h3>
      <p>${item.price} €</p>
      <button>Ajouter au panier</button>
    `;
    availableItems.appendChild(li);
    const button = li.querySelector('button');
    button.addEventListener('click', ()=> {
      if (cartItems.find((currentItem) => {
        return currentItem.id === item.id
      })) {
        const index = cartItems.findIndex(currentItem => currentItem.id === item.id)
        cartItems[index].quantity += 1;

      } else {
        const itemWithIteration = item;
        item.quantity = 1;
        cartItems.push(itemWithIteration);
      }
      let tmp = "";
      for (let article of cartItems){
        let html = `
        <li class="cart-item">
        <h3>${article.name}</h3>
        <p>${article.price} €</p>
        <p>Quantity: ${article.quantity}</p>
        <button id="minus">-</button>
        <button id="remove">Retirer du panier</button>
        <button data-remove="${article.id}">+</button>
        </li>
        `
        
        tmp+=html;
      }


      cart.innerHTML = tmp;

      const removeButtons = document.querySelectorAll('button[data-remove]')
      for(let i = 0; i < removeButtons.length;i++){
        const btn = removeButtons[i];
        btn.addEventListener("click", () => {
          console.log("coucou");
          const id = parseInt(btn.getAttribute("data-remove"))
          console.log(id);
          const index = cartItems.findIndex((currentArticle) => {
            console.error(currentArticle.id);
            console.error(id);
            return currentArticle.id === id
          })
          console.log(index);
          cartItems[index].quantity += 1;
          let tmp = "";
      for (let article of cartItems){
        let html = `
        <li class="cart-item">
        <h3>${article.name}</h3>
        <p>${article.price} €</p>
        <p>Quantity: ${article.quantity}</p>
        <button id="minus">-</button>
        <button id="remove">Retirer du panier</button>
        <button data-remove="${article.id}">+</button>
        </li>
        `
        
        tmp+=html;
      }


      cart.innerHTML = tmp;
        })
      }
    })
    
  }
  
})