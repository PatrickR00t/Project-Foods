import React, { useEffect, useState } from "react";
import { actionType } from "../context/actions/Actions";
import { useStateValue } from "../context/provider/Provider";
import { AddRounded, RemoveRounded } from "@mui/icons-material";
let cartItems = [];

function CartItem({ itemId, name, imgSrc, price }) {
  const [qty, setQty] = useState(1);
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));
  const [{ cart, total }, dispatch] = useStateValue();

  useEffect(() => {
    cartItems = cart;
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [qty]);

  const updateQty = (action, id) => {
    if (action == "add") {
      setQty(qty + 1);
    }
    else
    {
      if (qty == 1) {
        cartItems.pop(id);
        dispatch({
          type: actionType.SET_CART,
          cart: cartItems,
        });
      } else {
        setQty(qty - 1);
      };
    };
  };

  return (
    <div className="cartItem" id={itemId}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              onClick={() => updateQty("remove", itemId)}
            />
            <AddRounded
              className="itemAdd"
              onClick={() => updateQty("add", itemId)}
            />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">R$</span>{" "}{total}
        <span className="itemPriceValue">{itemPrice}</span>
      </p>
    </div>
  );
};

export default CartItem;
