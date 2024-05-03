import { useContext, useState, useEffect } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";
function Basket() {
  const theme = useContext(ThemeContext);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedProducts);
  }, []);
  return (
    <>
      <Header />
      {cart.map((item, index) => (
        <div key={index}>
          <div className="grid gap-8 lg:grid-cols-12 ml-[220px] mt-[100px]">
            <div className="lg:col-span-8">
              <article className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
                <img
                  src={item.image}
                  className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
                  alt=""
                />
                <div className="sm:ml-16 sm:w-48">
                  <h3 className="capitalize font-medium">{item.title}</h3>
                  <h4 className="mt-2 capitalize text-sm text-neutral-content"></h4>
                  <div className="flex items-center ">
                    <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
                      "color :"
                    </p>
                    <span className="badge mt-4 ml-3 badge-sm bg-red-600">
                      {item.color}
                    </span>
                  </div>
                  <div className="sm:ml-12">
                    <div className="form-control max-w-xs translate-x-32 -translate-y-20">
                      <label htmlFor="amout" className="label p-0 ">
                        <span className="label-text">Amout</span>
                      </label>
                      <select
                        name="amout"
                        id="amout"
                        className="mt-2 select select-text select-bordered select-xs"
                      >
                        <option value="1">{item.amount}</option>
                        <option value="2">{item.amount}</option>
                        <option value="3">{item.amount}</option>
                        <option value="4">{item.amount}</option>
                        <option value="5">{item.amount}</option>
                      </select>
                      <button className="mt-2 link link-primary link-hover text-sm">
                        remove
                      </button>
                      <p className="font-medium mr-11 sm:ml-auto">
                        $ {item.price}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div>
              <div className="lg:col-span-4 w-[330px] lg:pl-4 ">
                <div
                  className={`card ${
                    theme.theme == "light"
                      ? "text-white bg-slate-700"
                      : "text-white bg-slate-700"
                  }`}
                >
                  <div className="card-body">
                    <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                      <span>Subtotal</span>
                      <span className="font-medium">$4,579.79</span>
                    </p>
                    <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                      <span>Shipping</span>
                      <span className="font-medium">$5.00</span>
                    </p>
                    <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                      <span>Tax</span>
                      <span className="font-medium">$457.98</span>
                    </p>
                    <p className="flex justify-between text-sm mt-4 pb-2">
                      <span>Order Total</span>
                      <span className="font-medium">$5,042.77</span>
                    </p>
                  </div>
                </div>
                <Link
                  to={"/"}
                  className={"uppercase  mt-9  w-[320px] btn btn-secondary"}
                >
                  proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default Basket;
