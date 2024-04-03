import React from "react";
import Text from "../../components/AboutText/Text";
import Header from "../../components/Header/Header";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
function About() {
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
      <Header></Header>
      <Text></Text>
    </div>
  );
}

export default About;
