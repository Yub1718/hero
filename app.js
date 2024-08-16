const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Rolex",
    price: 1000,
    colors: [
      {
        code: "black",
        img: "./img/rolex1.png",
      },
      {
        code: "darkblue",
        img: "./img/rolex222.png",
      },
    ],
  },
  {
    id: 2,
    title: "Seiko",
    price: 1100,
    colors: [
      {
        code: "lightgray",
        img: "./img/seiko11.png",
      },
      {
        code: "green",
        img: "./img/seiko 22.png",
      },
    ],
  },
  {
    id: 3,
    title: "omega",
    price: 1200,
    colors: [
      {
        code: "lightgray",
        img: "./img/omega11.png",
      },
      {
        code: "green",
        img: "./img/omega22.png",
      },
    ],
  },
  {
    id: 4,
    title: "titan",
    price: 1300,
    colors: [
      {
        code: "black",
        img: "./img/titan11.png",
      },
      {
        code: "lightgray",
        img: "./img/titan12.png",
      },
    ],
  },
  {
    id: 5,
    title: "armani",
    price: 1400,
    colors: [
      {
        code: "gray",
        img: "./img/armani11.png",
      },
      {
        code: "black",
        img: "./img/armani12.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});