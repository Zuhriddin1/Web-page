import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Detail() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.data) {
            const productData = data.data.attributes;
            setProduct({
              title: productData.title,
              description: productData.description,
              image: productData.image,
            });
          } else {
            console.error("Product not found for ID:", id);
            navigate("/");
          }
        })
        .catch((err) => {
          console.error("Error fetching product:", err);
        });
    } else {
      navigate("/");
    }
  }, [id]);
  return (
    <div>
      {product ? (
        <div className="flex ml-[20px] mt-[20px]">
          <div className="max-w-[500px]">
            <img src={product.image} className="w-[390px]" alt="" />
            <h2 className="text-white font-extrabold text-2xl">
              {product.title}
            </h2>
            <p className="text-white container">{product.description}</p>
          </div>
          <div className="ml-[200px] mt-[150px]">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Please enter number of products
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <div className="flex mt-[100px] ">
              <p className="text-sm capitalize flex items-center gap-x-2">
                "color :"
              </p>
              <span className="badge mt-4 ml-3 badge-sm bg-red-600 cursor-pointer hover:bg-red-900"></span>
              <span className="badge mt-4 ml-3 badge-sm bg-yellow-600 cursor-pointer hover:bg-yellow-900"></span>
            </div>
            <div>
              <Link to={"/basket"}>
                <button className="btn btn-primary mt-[50px] uppercase w-[280px]">
                  add to card
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}

export default Detail;
