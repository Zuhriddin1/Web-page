import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Info from "../../components/Info/Info";
function Detail() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data.data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigate("/");
    }
  }, [id]);

  //   return (
  // <div>
  //   <h1>{product && product.map((el,index) => {
  //     return <h1>{}</h1>
  //   })}</h1>
  // </div>
  //   );
}
export default Detail;
