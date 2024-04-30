import { useEffect, useState } from "react";
import AboutCard from "../../pages/AboutCard/AboutCard";
import { SyncLoader } from "react-spinners";
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
    <div className="flex flex-wrap gap-4 justify-center items-center align-middle ">
      {loading && <SyncLoader size={21} className="mt-[250px]" />}
      {mebel &&
        mebel.map((product, index) => {
          return (
            <>
              {!loading && <AboutCard key={index} data={product}></AboutCard>}
            </>
          );
        })}
    </div>
  );
}
export default AllProducts;
