import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
function HomeProducts() {
  const [feature, setFeature] = useState([]);
  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products?featured=true")
      .then((res) => res.json())
      .then((data) => {
        setFeature(data.data);
        // console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="border-b border-base-300 pb-5">
        <h1 className="pt-24 ml-[220px] text-white text-3xl font-medium tracking-wider capitalize ">
          Featured Products
        </h1>
        <hr className="ml-[220px] mr-[220px] mt-4 text-black mb-5" />
      </div>
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ml-[100px]">
        {feature &&
          feature.map((el, index) => {
            return (
              <div>
                <Card data={el.attributes} key={index}></Card>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default HomeProducts;
