import { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import { FadeLoader } from "react-spinners";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../App";
function HomeProducts() {
  const theme = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const [feature, setFeature] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://strapi-store-server.onrender.com/api/products?featured=true")
      .then((res) => res.json())
      .then((data) => {
        setFeature(data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      {/* ${theme.theme == "light" ? "bg-slate-100" : "bg-neutral"} */}
      <div className="border-b border-base-300 pb-5">
        <h1
          className={`pt-24 ml-[220px] 
          ${theme.theme == "light" ? "text-black" : "text-white"} 
            text-3xl font-medium tracking-wider capitalize`}
        >
          {/* Featured Products */}
          {t("Featured Products")}
        </h1>
        <hr className="ml-[220px] mr-[220px] mt-4 text-black mb-5" />
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center align-middle  mt-0">
        <div>{loading && <FadeLoader size={21} className="" />}</div>
        {feature &&
          feature.map((el, index) => {
            return (
              <div>
                {!loading && <Card data={el.attributes} key={index}></Card>}
              </div>
            );
          })}
      </div>
    </>
  );
}
export default HomeProducts;
