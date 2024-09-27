import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(true);

  const cardItems = useSelector((state) => state.card.card);
  const totalQty = cardItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cardItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  console.log("cardItem...", activeCard);
  return (
    <>
      <div className={`Order-container ${activeCard ? "active" : ""}`}>
        <div className="order_heading">
          <div className="order_text">My Order</div>
          <IoClose
            // onClick={() => setActiveCard(false)}
            className="close_icon"
            onClick={() => setActiveCard(!activeCard)}
          />
        </div>
        {cardItems.length > 0 ? (
          cardItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <></>
          // <h2 className="empty">
          //   Your cart is empty
          // </h2>
        )}

        <div className="bottom-text">
          <h3 className="item">Item : {totalQty}</h3>
          <h3 className="total">Total Amount: {totalPrice}</h3>
          <hr className="line" />
          <button className="checkOut-btn" onClick={() => navigate("/success")}>
            CheckOut
          </button>
        </div>
      </div>
      <div className="shopping_btn">
        <FaShoppingCart
          // onClick={() => setActiveCard(false)}
          onClick={() => setActiveCard(false)}
          className={`shopping_icon ${totalQty ? "active" : ""}`}
        />
      </div>
    </>
  );
};

export default Card;
