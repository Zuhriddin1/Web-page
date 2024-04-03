import { useState } from "react";
import Basket from "../../components/Basket/Basket";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
function Order() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("uz");
  function handleClick(e) {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  }
  useEffect(() => {
    if (localStorage.getItem("language")) {
      i18n.changeLanguage(localStorage.getItem("language"));
      setLang(localStorage.getItem("language"));
    } else {
      i18n.changeLanguage("uz");
    }
  }, []);
  return (
    <div>
      <Basket></Basket>
    </div>
  );
}

export default Order;
