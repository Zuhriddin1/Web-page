import AllProducts from "../../components/Products/AllProducts";
import Header from "../../components/Header/Header";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useState } from "react";
function Products() {
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
    <div className="">
      <Header></Header>
      <div className="">
        <span className="flex justify-start ml-[240px] translate-y-16 text-white items-center">
          {t("22 products")}
        </span>
        <hr className="translate-y-20 text-black mr-[220px] ml-[220px]" />
        <AllProducts></AllProducts>
      </div>
    </div>
  );
}

export default Products;
