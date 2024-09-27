import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCard } from "../Slices/CardSlice";

const FoodCard = ({ id, name, rating, img, desc, price, handleToast }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="card_items">
        <img src={img}></img>
        <div className="text-sm">
          <h2>{name.slice(0, 18)}..</h2>
          <span className="items_rupees">{price}</span>
        </div>
        <p className="par">{desc.slice(0, 50)}...</p>
        <div className="star_btn">
          <div className="star_icon">
            <FaStar className="star" /> {rating}
          </div>
          <button
            className="add_btn"
            onClick={() => {
              dispatch(
                addToCard({ id, name, rating, desc, price, img, qty: 1 })
              );
              handleToast(name);
            }}
          >
            Add to Card
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
