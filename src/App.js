import React, { useState } from "react";
import "./App.css";
import RibbonMenu from "./components/RibbonMenu/RibbonMenu";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import { BrowserRouter } from "react-router-dom";
import Slider from "./components/Slider/Slider";
import Header from "./components/Header/Header";

function App() {
  let productsArray = [
    {
      name: "Laab kai chicken salad",
      price: 10,
      category: "salads",
      image: "https://course-jsbasic.javascript.ru/assets/products/laab_kai_chicken_salad.png",
      id: "laab-kai-chicken-salad",
      spiciness: 2,
    },
    {
      name: "Som tam papaya salad",
      price: 9.5,
      category: "salads",
      image: "https://course-jsbasic.javascript.ru/assets/products/som_tam_papaya_salad.png",
      id: "som-tam-papaya-salad",
      spiciness: 0,
    },
    {
      name: "Tom yam kai",
      price: 7,
      category: "soups",
      image: "https://course-jsbasic.javascript.ru/assets/products/tom_yam.png",
      id: "tom-yam-kai",
      spiciness: 3,
    },
    {
      name: "Tom kha kai",
      price: 7,
      category: "soups",
      image: "https://course-jsbasic.javascript.ru/assets/products/tom_kha.png",
      id: "tom-kha-kai",
      spiciness: 3,
    },
    {
      name: "Tom kha koong",
      price: 8,
      category: "soups",
      image: "https://course-jsbasic.javascript.ru/assets/products/tom_kha.png",
      id: "tom-kha-koong",
      spiciness: 2,
    },
    {
      name: "Tom yam koong",
      price: 8,
      category: "soups",
      image: "https://course-jsbasic.javascript.ru/assets/products/tom_yam.png",
      id: "tom-yam-koong",
      spiciness: 4,
    },
    {
      name: "Tom yam vegetarian",
      price: 7,
      category: "soups",
      image: "https://course-jsbasic.javascript.ru/assets/products/tom_yam.png",
      id: "tom-yam-vegetarian",
      spiciness: 1,
    },
    {
      name: "Tom kha vegetarian",
      price: 7,
      category: "soups",
      image: "https://course-jsbasic.javascript.ru/assets/products/tom_kha.png",
      id: "tom-kha-vegetarian",
      spiciness: 1,
    },
    {
      name: "Sweet 'n sour chicken",
      price: 14,
      category: "chicken-dishes",
      image: "https://course-jsbasic.javascript.ru/assets/products/sweet_n_sour.png",
      id: "sweet-n-sour-chicken",
      spiciness: 2,
    },
    {
      name: "Chicken cashew",
      price: 14,
      category: "chicken-dishes",
      image: "https://course-jsbasic.javascript.ru/assets/products/chicken_cashew.png",
      id: "chicken-cashew",
      spiciness: 1,
    },
    {
      name: "Kai see ew",
      price: 14,
      category: "chicken-dishes",
      image: "https://course-jsbasic.javascript.ru/assets/products/kai_see_ew.png",
      id: "kai-see-ew",
      spiciness: 4,
    },
    {
      name: "Beef massaman",
      price: 14.5,
      category: "beef-dishes",
      image: "https://course-jsbasic.javascript.ru/assets/products/beef_massaman.png",
      id: "beef-massaman",
      spiciness: 2,
    },
    {
      name: "Seafood chu chee",
      price: 16,
      category: "seafood-dishes",
      image: "https://course-jsbasic.javascript.ru/assets/products/chu_chee.png",
      id: "seafood-chu-chee",
      spiciness: 2,
    },
    {
      name: "Penang shrimp",
      price: 16,
      category: "seafood-dishes",
      image: "https://course-jsbasic.javascript.ru/assets/products/red_curry.png",
      id: "penang-shrimp",
      spiciness: 4,
    },
    {
      name: "Green curry veggies",
      price: 12.5,
      category: "vegetable-dishes",
      vegeterian: true,
      image: "https://course-jsbasic.javascript.ru/assets/products/green_curry.png",
      id: "green-curry-veggies",
      spiciness: 0,
    },
    {
      name: "Tofu cashew",
      price: 12.5,
      category: "vegetable-dishes",
      vegeterian: true,
      image: "https://course-jsbasic.javascript.ru/assets/products/tofu_cashew.png",
      id: "tofu-cashew",
      spiciness: 0,
    },
    {
      name: "Red curry veggies",
      price: 12.5,
      category: "vegetable-dishes",
      image: "https://course-jsbasic.javascript.ru/assets/products/red_curry_vega.png",
      id: "red-curry-veggies",
      spiciness: 4,
    },
    {
      name: "Krapau tofu",
      price: 12.5,
      category: "vegetable-dishes",
      image: "https://course-jsbasic.javascript.ru/assets/products/krapau_vega.png",
      id: "krapau-tofu",
      spiciness: 0,
    },
    {
      name: "Prawn crackers",
      price: 2.5,
      category: "bits-and-bites",
      image: "https://course-jsbasic.javascript.ru/assets/products/kroepoek.png",
      id: "prawn-crackers",
      spiciness: 1,
    },
    {
      name: "Fish cakes",
      price: 6.5,
      category: "bits-and-bites",
      image: "https://course-jsbasic.javascript.ru/assets/products/fish_cakes.png",
      id: "fish-cakes",
      spiciness: 1,
    },
    {
      name: "Chicken satay",
      price: 6.5,
      category: "bits-and-bites",
      image: "https://course-jsbasic.javascript.ru/assets/products/sate.png",
      id: "chicken-satay",
      spiciness: 1,
    },
    {
      name: "Satay sauce",
      price: 1.5,
      category: "bits-and-bites",
      image: "https://course-jsbasic.javascript.ru/assets/products/satesaus.png",
      id: "satay-sauce",
      spiciness: 2,
    },
    {
      name: "Shrimp springrolls",
      price: 6.5,
      category: "bits-and-bites",
      image: "https://course-jsbasic.javascript.ru/assets/products/koong_hom_pha.png",
      id: "shrimp-springrolls",
      spiciness: 3,
    },
    {
      name: "Mini vegetarian spring rolls",
      price: 6.5,
      category: "bits-and-bites",
      image: "https://course-jsbasic.javascript.ru/assets/products/mini_vega_springrolls.png",
      id: "mini-vegetarian-spring-rolls",
      spiciness: 2,
    },
    {
      name: "Chicken springrolls",
      price: 6.5,
      category: "bits-and-bites",
      image: "https://course-jsbasic.javascript.ru/assets/products/chicken_loempias.png",
      id: "chicken-springrolls",
      spiciness: 2,
    },
    {
      name: "Thai fried rice",
      price: 7.5,
      category: "on-the-side",
      image: "https://course-jsbasic.javascript.ru/assets/products/fried_rice.png",
      id: "thai-fried-rice",
      spiciness: 2,
    },
    {
      name: "Prik nam pla",
      price: 0.5,
      category: "on-the-side",
      image: "https://course-jsbasic.javascript.ru/assets/products/prik_nam_pla.png",
      id: "prik-nam-pla",
      spiciness: 4,
    },
    {
      name: "Fresh prawn crackers",
      price: 2.5,
      category: "on-the-side",
      image: "https://course-jsbasic.javascript.ru/assets/products/kroepoek.png",
      id: "fresh-prawn-crackers",
      spiciness: 1,
    },
    {
      name: "Stir fried vegetables",
      price: 7.5,
      category: "on-the-side",
      image: "https://course-jsbasic.javascript.ru/assets/products/stir_fried_vegetables.png",
      id: "stir-fried-vegetables",
      spiciness: 0,
    },
    {
      name: "White rice",
      price: 1.5,
      category: "on-the-side",
      image: "https://course-jsbasic.javascript.ru/assets/products/witte_rijst.png",
      id: "white-rice",
      spiciness: 0,
    },
    {
      name: "Fried noodles Thai style",
      price: 7.5,
      category: "on-the-side",
      image: "https://course-jsbasic.javascript.ru/assets/products/fried_noodles.png",
      id: "fried-noodles-thai-style",
      nuts: true,
      spiciness: 2,
    },
    {
      name: "King salad",
      price: 7.5,
      category: "on-the-side",
      image: "https://course-jsbasic.javascript.ru/assets/products/king_salad.png",
      id: "king-salad",
      nuts: true,
      spiciness: 2,
    },
    {
      name: "Satésaus",
      price: 1.5,
      category: "on-the-side",
      image: "https://course-jsbasic.javascript.ru/assets/products/satesaus.png",
      id: "sat-saus",
      nuts: true,
      spiciness: 2,
    },
  ];
  let [products, setProducts] = useState(productsArray);

  const filterProduct = (category) => {
    category.id === "all"
      ? setProducts(productsArray)
      : setProducts(productsArray.filter((el) => el.category === category.id));
  };
  return (
    <div className="App">
      <Header/>
      <main>
      <Slider/>
      <BrowserRouter>
        <RibbonMenu filter={filterProduct} />
        <ProductGrid products={products} />
      </BrowserRouter>
      </main>
    </div>
  );
}

export default App;

