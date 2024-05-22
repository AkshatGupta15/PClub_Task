import { useEffect, useState } from "react";
import "../src/output.css";
import "./App.css";

import Features from "./Components/Features/Features";
import { Product_Page } from "./Components/Products/Product_Page";
import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { Product_Details } from "./Components/Products/Product_Details";
import AllProducts from "./Data/Data";
import Profile from "./Components/Profile/Profile";
import { Cart } from "./Components/Cart/Cart";
import { Checkout } from "./Components/Checkout/Checkout";
import { Search } from "./Components/Search.jsx/Search";
import MyState from "./context/myState";
import { Login } from "./Pages/login";
import { Signup } from "./Pages/signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddProduct } from "./Components/AddProduct/AddProduct";
import { Dashboard } from "./Components/Dashboard/Dashboard";
function App() {
  const [cartItem, setCartItmes] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

  const handleAddToCart = (selected_item, counterCart) => {
    const itemsToAdd = Array(counterCart).fill(selected_item);
    // const isItemInCart = cartItem.some((item) => item.id === selected_item.id);
    setCartItmes([...cartItem, ...itemsToAdd]);
    // localStorage.setItem("cart", cartItem);
  };
  const [inputQuery, setInputQuery] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputQuery(e.target.value);
  };
  const handleInputSummit = (e) => {
    e.preventDefault();
    console.log("inputQuery");
    // setInputQuery(e.target.value)
  };
  const filterByCategory = (category) => {
    const relatedItems = AllProducts.filter(
      (item) => item.category === category
    );
    // console.log(relatedItems)
    return relatedItems;
  };

  const filteredItems = AllProducts.filter((product) => {
    return product.title.toLowerCase().indexOf(inputQuery.toLowerCase()) !== -1;
  });
  // console.log(AllProducts)
  // console.log(inputQuery, filteredItems)

  return (
    <>
      <MyState>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout
                  inputQuery={inputQuery}
                  handleInputChange={handleInputChange}
                  cartItem={cartItem}
                  setCartItmes={setCartItmes}
                  handleInputSummit={handleInputSummit}
                />
              }
            >
              <Route index element={<Home />} />
              {/* <Route path="/about" element={<Features />} />  */}
              <Route
                path="/store"
                element={<Product_Page filteredItems={filteredItems} />}
              ></Route>
              <Route
                path="/store/:category/:id"
                element={
                  <Product_Details
                    handleAddToCart={handleAddToCart}
                    AllProducts={AllProducts}
                    filterByCategory={filterByCategory}
                  />
                }
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/search/:term" element={<Search />} />
              <Route
                path="/cart"
                element={
                  <Cart cartItem={cartItem} setCartItmes={setCartItmes} />
                }
              />
              <Route
                path="/checkout"
                element={
                  <ProtectedRouteForAdmin>
                    <Checkout />
                  </ProtectedRouteForAdmin>
                }
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRouteForAdmin>
                    <Dashboard />
                  </ProtectedRouteForAdmin>
                }
              />
              <Route
                path="/addproduct"
                element={
                  <ProtectedRouteForAdmin>
                    <AddProduct />
                  </ProtectedRouteForAdmin>
                }
              />
            </Route>
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </MyState>
    </>
  );
}

export default App;

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if (admin && admin.user.email === "ak@dev.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
