import React from "react";
import FoodCard from "../Components/FoodCard";
import FoodData from "../Data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
const FoodItem = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  console.log(search);
  const handleToast = (name) => toast.success(`Added ${name}`);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="wrapper app-width">
        <div className=" FoodItem">
          {/* hello */}
          {FoodData.filter((food) => {
            if (category === "All") {
              return food.name.toLowerCase().includes(search.toLowerCase());
            } else {
              return (
                category === food.category &&
                food.name.toUpperCase().includes(search.toUpperCase())
              );
            }
          }).map((food) => (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              handleToast={handleToast}
            />
          ))}
          {/* {FoodData.map((food) => {
            return (
              <FoodCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                desc={food.desc}
                rating={food.rating}
                img={food.img}
                handleToast={handleToast}
              />
            );
          })} */}
        </div>
      </div>
    </>
  );
};

export default FoodItem;
