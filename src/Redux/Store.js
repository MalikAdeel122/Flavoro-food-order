import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "../Slices/CardSlice";
import CategorySlice from "../Slices/CategorySlice";
import SearchSlice from "../Slices/SearchSlice";
const Store = configureStore({
  reducer: {
    card: CardSlice,
    category: CategorySlice,
    search: SearchSlice,
  },
});
export default Store;
