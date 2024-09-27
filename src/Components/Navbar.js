import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "../Slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  //   const value = Date.now();
  //   const currentDate = new Date(value);

  //   const result = currentDate.toUTCString();
  //   console.log(result);
  return (
    <div className="navbar">
      <div className="wrapper app-width">
        <div className="ls">
          {/* <h3>{result.slice(0, 16)}</h3> */}
          <h3 className="date">{new Date().toUTCString().slice(0, 16)}</h3>
          <h1 className="heading_name">Food Products</h1>
        </div>
        <div className="rs">
          <input
            type="search"
            name="search"
            placeholder="search"
            autoComplete="off"
            className="search_item"
            onClick={(e) => dispatch(setSearch(e.target.value))}
          ></input>
        </div>
        <Link to=""></Link>
      </div>
    </div>
  );
};

export default Navbar;
