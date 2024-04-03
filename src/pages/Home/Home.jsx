import { useState } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/HeroText/Hero";
import HomeProducts from "../../components/HomeProducts/HomeProducts";
import Slider from "../../components/Slider/Slider";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
function Home() {
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
    <>
      <Header></Header>
      <div>
        <div className="flex">
          <Hero></Hero>
          <Slider></Slider>
        </div>
        <HomeProducts></HomeProducts>
      </div>
    </>
  );
}

export default Home;
