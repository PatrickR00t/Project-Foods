import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import MenuCard from "./components/MenuCard";
import CardItem from "./components/CardItems";
import CartItem from "./components/CartItems";
import SubMenuContainer from "./components/SubMenuContainer";
import { useStateValue } from "./context/provider/Provider";
import { MenuItems, Items } from "./services/Data";

import "./App.css";

function App() {
  const [MainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
  );

  const [{ cart, total }] = useStateValue();

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    const menuCard = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [MainData, cart, total]);

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="mainContainer">
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer />
            </div>

            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id === "1" ? true : false}
                    />
                  </div>
                ))}
            </div>

            <div className="dishItemContainer">
              {MainData &&
                MainData.map((data) => (
                  <CardItem
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <Card />
            </div>
          </div>

          {!cart ? (
            <div className="addSomeItem">
              <img
                src="https://www.conexled.com.br/newLib/img/Cart.png"
                alt=""
                className="emptyCart"
              />
            </div>
          ) : (
            <div className="cartCheckOutContianer">
              <div className="cartContainer">
                <h3>Carrinho</h3>
                <div className="cartItems">
                  {cart &&
                    cart.map((data) => (
                      <CartItem
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        qty={"4"}
                        price={data.price}
                      />
                    ))}
                </div>
              </div>
              <div className="totalSection">
                <h3>Total</h3>
                <p>
                  <span>R$ </span>
                  {total}
                </p>
              </div>
              <button className="checkOut">Finalizar</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
