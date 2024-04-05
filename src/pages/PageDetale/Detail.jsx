import { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
function Detail() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.data) {
            const productData = data.data.attributes;
            setProduct({
              title: productData.title,
              description: productData.description,
              image: productData.image,
              company: productData.company,
              price: productData.price,
            });
          } else {
            console.error("Product not found for ID:", id);
            navigate("/");
          }
        })
        .catch((err) => {
          console.error("Error fetching product:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      navigate("/");
    }
  }, [id]);

  return (
    <div>
      <Header></Header>
      {loading && (
        <div className="flex flex-row gap-4 w-[800px]  mx-auto mt-20">
          <div className="skeleton h-[380px] w-full"></div>
          <div className="leftic flex-col gap-4 mt-4">
            <div className="skeleton h-4 w-48"></div>
            <div className="skeleton h-4 w-64 mt-2"></div>
            <div className="skeleton h-4 w-64 mt-6"></div>
            <div className="skeleton h-20 w-96 mt-2"></div>
            <div className="skeleton h-4 w-full mt-6"></div>
            <div className="skeleton h-8 w-48 mt-4"></div>
          </div>
        </div>
      )}
      {product && !loading ? (
        <section className="container">
          <div className="container flex mx-auto ">
            <div className="image-side ml-40 w-[50%] mt-10">
              <ul className="flex gap-4 mb-4">
                <li className="ml-5">
                  <Link to={"/"}>Home {"        >"}</Link>
                </li>
                <li>
                  <Link to={"/products"}>Products</Link>
                </li>
              </ul>
              <img
                src={product.image}
                className="w-[600px] h-96 object-cover rounded-lg "
                alt=""
              />
            </div>
            <div className="desc-side pt-20 w-[50%]">
              <h2 className=" text-white font-extrabold text-2xl">
                {product.title}
              </h2>
              <p className="text-xl text-white">{product.company}</p>
              <p className="text-2xl text-white">${product.price}</p>
              <p className="text-white w-[90%] mt-4">{product.description}</p>
              <h4 className="mt-4 mb-2">Colors</h4>
              <span className="badge badge-error ml-2 hover:border-white cursor-pointer"></span>
              <span className="badge badge-success ml-2 hover:border-white cursor-pointer"></span>
              <span className="badge badge-primary ml-2 hover:border-white cursor-pointer"></span>
              <div className="selected mt-4 mb-4">
                <select
                  name=""
                  id=""
                  className="w-40 outline-none border rounded-md "
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                </select>
              </div>
              <div className="linked">
                <NavLink to="/basket">
                  <button className="uppercase btn text-white btn-primary">
                    add to bag
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
}
export default Detail;
