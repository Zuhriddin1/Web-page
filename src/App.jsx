import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/LogIn/Login";
import Register from "./pages/Register/Register.jsx";
import Home from "./pages/HomePage/Home";
import Products from "./pages/Products/Products";
import Basket from "./components/Basket/Basket";
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  // const isAuthenticated = token;

  // // function ProtectedRoute({ children }) {
  // //   if (!isAuthenticated) {
  // //     navigate("/login");
  // //     return null;
  // //   }
  // //   return children;
  // // }
  return (
    <>
      {/* <header>
        <div className="flex flex-row">
          <Link to={"https://react-vite-comfy-store-v2.netlify.app/"}>
            <h1 className="bg-primary dark:bg-secondary flex w-14 pl-3.5 mt-10 font-extrabold text-black rounded-xl p-3 text-4xl">
              C
            </h1>
          </Link>
          <ul className="flex flex-row">
            <li className="flex">salom</li>
            <li className="flex">hair</li>
          </ul>
        </div>
      </header> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/basket" element={<Basket />} />
        <Route
          path="/"
          element={
            <>{<Home />}</>
            //protect Route
          }
        />
        <Route
          path="/products"
          element={<>{<Products />}</>}
          //protect Route
        />
        <Route path="*" element={<Error />} />{" "}
      </Routes>
    </>
  );
}
export default App;
