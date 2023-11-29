import { useState } from "react";
import "./App.scss";
import arrCards from "../../foodBurgers.json";
import arrBurgers from "../../cardBurgers.json";
import Cards from "../Cards/Cards";

import CardsBurgers from "../Burgers/Burgers";

export default function App() {
  const [burgers, setBurgers] = useState(arrCards);
  const [allProductsCount, setAllProductsCount] = useState(3);
  const [allPrice, setAllPrice] = useState(1034);
  function editAllProductsCount(amper) {
    setAllProductsCount(allProductsCount + amper);
  }
  function editAllPrice(amper, confCost) {
    setAllPrice(amper * confCost + allPrice);
  }
  function delCards(id) {
    const newBurgersArr = burgers.filter((item) => item.id != id);
    setBurgers(newBurgersArr);
  }

  if (!burgers) {
    return <h1>Error 404</h1>;
  }

  return (
    <div className="container">
      <div className="container_basket">
        <div className="container_head">
          <h1>Корзина</h1>
          <h2>{allProductsCount}</h2>
        </div>
        <div className="wrapper_gl_cards">
          {burgers.map((item) => (
            <Cards
              {...item}
              key={item.id}
              editAllProductsCount={editAllProductsCount}
              delCards={delCards}
              editAllPrice={editAllPrice}
            />
          ))}
        </div>
        <div className="container_footer">
          <h1>Итого</h1>
          <h2>{allPrice}₽</h2>
        </div>
      </div>
      <div className="container_burger-cards">
        <h2 className="container_cards-title">Бургеры</h2>
        <div className="cards__item">
          {arrBurgers.map((item) => (
            <CardsBurgers {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
