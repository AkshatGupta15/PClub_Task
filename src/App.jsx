import { useEffect, useState } from "react";
import "../src/output.css";
import "./App.css";
import AllProducts from "./Data/Data";
import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import loadable from "@loadable/component";
import "react-toastify/dist/ReactToastify.css";
// const Home = lazy(()=> import("./Home")) 
// const Product_Details = lazy(()=> import("./Components/Products/Product_Details")) 
// const Profile = loadable(()=> import("./Components/Profile/Profile")) 
// const Cart = lazy(()=> import("./Components/Cart/Cart")) 
// const Signup = lazy(()=> import("./Pages/login")) 
// const Checkout = lazy(()=> import("./Components/Checkout/Checkout")) 
// const Product_Page = lazy(()=> import("./Components/Products/Product_Page")) 
// const Login = loadable(()=> import("./Pages/login")) 
// const Layout = lazy(()=> import("./Layout")) 
// const Dashboard = lazy(()=> import("./Components/Dashboard/Dashboard")) 
// const AddProduct = lazy(()=> import("./Components/AddProduct/AddProduct")) 
const Home = loadable(() => import('./Home'));
const Cart = loadable(() => import('./Components/Cart/Cart'));
const Login = loadable(() => import('./Pages/login'));
const Signup = loadable(() => import('./Pages/signup'));
const Checkout = loadable(() => import('./Components/Checkout/Checkout'));
const Profile = loadable(() => import("./Components/Profile/Profile"));
const Product_Page = loadable(() => import('./Components/Products/Product_Page'));
const Product_Details = loadable(() => import('./Components/Products/Product_Details'));
import { Layout } from "./Layout";
// import { Home } from "./Home";
// import { Product_Page } from "./Components/Products/Product_Page";

// import Profile from "./Components/Profile/Profile";
// import { Cart } from "./Components/Cart/Cart";
// import { Checkout } from "./Components/Checkout/Checkout";
// import { Login } from "./Pages/login";
// import { Signup } from "./Pages/signup";
import { AddProduct } from "./Components/AddProduct/AddProduct";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { Search } from "./Components/Search.jsx/Search";
import MyState from "./context/myState";
import { LoaderPage } from "./Components/Loader/Loader";
import { EditProfile } from "./Pages/EditProfile";
import Order from "./Components/order/Order";
// import Product_Details from "./Components/Products/Product_Details";
function App() {
  const [orderItems , setOrderItems] = useState( JSON.parse(localStorage.getItem("order")) || [])
  const [cartItem, setCartItmes] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);
  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(orderItems));
  }, [orderItems]);

  const handleAddToCart = (selected_item, counterCart) => {
    const itemsToAdd = Array(counterCart).fill(selected_item);
    // const isItemInCart = cartItem.some((item) => item.id === selected_item.id);
    setCartItmes([...cartItem, ...itemsToAdd]);
    // localStorage.setItem("cart", cartItem);
  };
  const handleOrder = (neworder) => {
    setOrderItems([...orderItems, ...neworder]);
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
        {/* <Suspense fallback={<LoaderPage/>}> */}
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
              <Route index element={<Home filterByCategory={filterByCategory}/>} />
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
                  <ProtectedRoute>
                    <Checkout cartItem={cartItem} setCartItmes={setCartItmes}  handleOrder={handleOrder}/>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile/>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/order"
                element={
                  <ProtectedRoute>
                    <Order orderItems={orderItems}/>
                  </ProtectedRoute>
                }
              />
              
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/editProfile" element={<EditProfile />} />
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
          {/* </Suspense> */}
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
