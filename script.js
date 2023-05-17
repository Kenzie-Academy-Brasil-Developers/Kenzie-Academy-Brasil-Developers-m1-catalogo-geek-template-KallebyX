const productsArray = [
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$99,00",
    type: "paintings",
  },

  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "Paintings",
  },

  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$160,00",
    type: "Paintings",
  },

  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$ 120,00",
    type: "Paintings",
  },

  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$700,00",
    type: "Action Figures",
  },

  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$ 950,00",
    type: "Action Figures",
  },

  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$1030,00",
    type: "Action Figures",
  },

  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$870,00",
    type: "Action Figures",
  },

  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$510,00",
    type: "Action Figures",
  },
];


let actionFiguresArray = []

let paintingsArray = []

function separateItens(productsArray){
  for (let i = 0; i < productsArray.length; i++){
    if(productsArray[i].type === "Action Figures"){
      actionFiguresArray.push(productsArray[i])
    }
    if(productsArray[i].type === "Paintings"){
      paintingsArray.push(productsArray[i])
    }
  } return actionFiguresArray, paintingsArray
}

separateItens(productsArray)

function renderListAction(actionFiguresArray) {
  let listaAction = document.querySelector('#actionFiguresContainer');
  for (let i = 0; i < actionFiguresArray.length; i++) {
    let action = actionFiguresArray[i];

    let li = document.createElement('li');
    let img = document.createElement('img');
    let name = document.createElement('H3');
    let price = document.createElement('p');

    img.src = action.image;
    img.alt = action.name;
    name.textContent = action.name;
    price.textContent = action.price;

    li.appendChild(img);
    li.appendChild(name);
    li.appendChild(price);
    listaAction.appendChild(li);
  }
}

renderListAction(actionFiguresArray);

function renderListPaintings(paintingsArray) {
  let listaPaintings = document.querySelector('#paintingsContainer');
  for (let i = 0; i < paintingsArray.length; i++) {
    let painting = paintingsArray[i];

    let li = document.createElement('li');
    let img = document.createElement('img');
    let name = document.createElement('H3');
    let price = document.createElement('p'); 

    img.src = painting.image;
    img.alt = painting.name;
    name.textContent = painting.name;
    price.textContent = painting.price;
    
    li.appendChild(img);
    li.appendChild(name);
    li.appendChild(price);
    listaPaintings.appendChild(li);
  }
}

renderListPaintings(paintingsArray);
