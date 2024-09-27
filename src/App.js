import "./scss/style.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import ProductedRoucte from "./Components/ProductedRoucte";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route
          path="/success"
          element={<ProductedRoucte element={<Success />} />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
