import { useEffect, useState } from "react";
import FoodData from "../Data/FoodData";
import { useDispatch, useSelector } from "react-redux";

import { setCategory } from "../Slices/CategorySlice";

const Category = () => {
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);

  const selectedCategory = useSelector((state) => state.category.category);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)), //set is data structure use to common data
    ];
    // console.log("data..", category);
    setCategories(uniqueCategories);
    // console.log(uniqueCategories);
  };
  useEffect(() => {
    listUniqueCategories();
    // console.log("data..", categories);
  }, []);

  return (
    <div className="category">
      <div className="wrapper app-width">
        <div className="category_heading">
          <h1>Find The Best Foods⁖</h1>
        </div>
        <div className="Category_button">
          <button
            onClick={() => dispatch(setCategory("All"))}
            className={`category-btn_link ${
              selectedCategory === "All" ? "active" : ""
            }`}
          >
            All
          </button>
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                onClick={() => dispatch(setCategory(category))}
                className={`category-btn_link ${
                  selectedCategory === category ? "active" : ""
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
