import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="mt-14 flex bg-slate-100">
        <Link to={"https://react-vite-comfy-store-v2.netlify.app/"}>
          <h1 className="btn-primary dark:btn-secondary inline p-3  ml-[220px] pr-4 pl-4  btn text-black font-medium pt-2 pb-2 text-3xl">
            C
          </h1>
        </Link>
        <ul className="flex hover:bg-gray-800 hover:dark:bg-gray-600">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Card</li>
          <li>Checkout</li>
          <li>Orders</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
