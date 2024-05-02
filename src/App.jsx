import "./i18n";
import { Route, Routes, useNavigate } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";
import Login from "./pages/LogIn/Login";
import Register from "./pages/Register/Register.jsx";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Basket from "./components/Basket/Basket";
import About from "./pages/About/About";
import Detail from "./pages/PageDetale/Detail";
export const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState("light");
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/" element={<>{<Home />}</>} />
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/products" element={<>{<Products />}</>} />
          <Route path="/product/:id" element={<Detail></Detail>}></Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  );
}
export default App;
