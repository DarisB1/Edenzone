const items = [
    {
        id: 1,
        name: 'Fromage',
        price: 5,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/50/Ch%C3%A8vres_cendr%C3%A9s.jpg"
    },
    {
        id: 2,
        name: 'Pain',
        price: 2,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Baguettes_-_stonesoup.jpg"
    },
    {
        id: 3,
        name: 'Vin',
        price: 10,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/11/Vin_bourru_Savoie.jpg"
    },
    {
        id: 4,
        name: 'Jambon',
        price: 8,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jambon_blanc_de_Paris.png"
    },
    {
        id: 5,
        name: 'Pommes',
        price: 3,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"
    },
    {
        id: 6,
        name: 'Poisson',
        price: 12,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Fishfinger_classic_frozen_1.jpg"
    },
    {
        id: 7,
        name: 'Poulet',
        price: 7,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Max%27s_Roasted_Chicken_-_Evan_Swigart.jpg"
    },
    {
        id: 8,
        name: 'Salade',
        price: 4,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/94/Salad_platter.jpg"
    },
    {
        id: 9,
        name: 'Pâtes',
        price: 6,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/Maccaronara_01.jpg"
    },
  ];
  
  
  export const getItems = () => {
    return Promise.resolve(items);
  }
  
  