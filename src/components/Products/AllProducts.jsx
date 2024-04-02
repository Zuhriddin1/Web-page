import { useEffect, useState } from "react";
import AboutCard from "../../pages/AboutCard/AboutCard";
import { space } from "postcss/lib/list";
function AllProducts() {
  const [mebel, setMebel] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        setMebel(data.data);
      })
      .then((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ml-[220px] mr-[220px]">
      {mebel &&
        mebel.map((el, index) => {
          return (
            <>
              {loading && <span>Loading</span>}
              {!loading && (
                <AboutCard key={index} data={el.attributes}></AboutCard>
              )}
            </>
          );
        })}
    </div>
  );
}
export default AllProducts;
