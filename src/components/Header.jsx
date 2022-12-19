import React, { useEffect } from "react";
import { useStateValue } from "../context/provider/Provider";
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import { SearchRounded, ShoppingCartRounded } from "@mui/icons-material";

function Header() {
  const [{ cart }] = useStateValue();

  useEffect(() => {
    const toggleIcon = document.querySelector(".toggleMenu");
    toggleIcon.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);

  return (
    <header>
      <img
        src="https://toppng.com/uploads/preview/omelette-transparent-veggie-omelette-11563238780vratcbkhjj.png"
        alt="logo"
        className="logo"
      />

      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input
          type="text"
          placeholder="Pesquisar" 
        />
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className={`${!cart ? "noCartItem" : "cart_content"}`}>
          <p>
            {cart ? cart.length : ""}
          </p>
        </div>
      </div>

      <div className="profileContainer">
        <div className="imgBox">
          <img
            src="https://media.istockphoto.com/id/947663966/vector/programming-design-concept.jpg?s=612x612&w=0&k=20&c=7ACckqE60fQkt8yLlFEkcVuhoBZWwwfUhyA2XaOZrGQ="
            alt=""
          />
        </div>
      </div>

      <div className="toggleMenu">
        <DensitySmallIcon className="toggleIcon" />
      </div>
    </header>
  );
};

export default Header;
