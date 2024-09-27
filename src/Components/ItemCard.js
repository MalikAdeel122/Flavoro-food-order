import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCard,
  incrementQty,
  decrementQty,
} from "../Slices/CardSlice";
import toast from "react-hot-toast";

const ItemCard = ({ id, name, img, price, qty }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="itemCard">
        <img src={img} alt="image" className="itemCard_img"></img>
        <div className="itemCard_product">
          <div className="itemCard-heading">
            <h2 className="itemCard-name">{name}</h2>
            <MdDelete
              className="delete_icon"
              onClick={() => {
                dispatch(removeFromCard({ id, img, name, price, qty }));
                toast(`${name} removed!`, {
                  icon: "👋",
                });
              }}
            />
          </div>

          <div className="ItemCard-rs">
            <span>{price}</span>
            <div className="plus-mins-btn">
              <FaPlus
                className="plus-btn"
                onClick={() =>
                  qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
                }
              />
              <span>{qty}</span>
              <FaMinus
                className="minus-btn"
                onClick={() =>
                  qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
