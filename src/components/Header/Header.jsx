import { SlBasket } from "react-icons/sl";
import { NavLink, Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="flex justify-end mt-2 mr-44 gap-7 underline">
        <NavLink
          to={"/register"}
          className="p-2 hover:bg-slate-600  rounded-full"
        >
          Register
        </NavLink>
        <NavLink className="hover:bg-slate-600 p-2  rounded-full" to={"/login"}>
          Log in
        </NavLink>
      </div>
      <div className="mt-5 pt-4 pb-4 flex bg-slate-100 dark:bg-gray-900 items-center">
        <NavLink to={"https://react-vite-comfy-store-v2.netlify.app/"}>
          <h1 className="btn-primary dark:btn-secondary inline p-3  ml-[220px] pr-4 pl-4  btn text-black font-medium pt-2 pb-2 text-3xl">
            C
          </h1>
        </NavLink>
        <ul className="flex items-center gap-5 cursor-pointer">
          <Link to={"/"}>
            <li className="p-4 rounded-xl  hover:bg-gray-800 ml-[280px] hover:dark:bg-gray-600">
              Home
            </li>
          </Link>
          <NavLink to={"/about"}>
            <li className="p-4 rounded-xl  hover:bg-gray-800 hover:dark:bg-gray-600">
              About
            </li>
          </NavLink>
          <NavLink to={"/products"}>
            <li className="p-4 rounded-xl  hover:bg-gray-800 hover:dark:bg-gray-600">
              Products
            </li>
          </NavLink>
          <NavLink to={"/basket"}>
            <li className="p-4  rounded-xl hover:bg-gray-800 hover:dark:bg-gray-600">
              Card
            </li>
          </NavLink>
          <li className="p-4 rounded-xl hover:bg-gray-800 hover:dark:bg-gray-600">
            Checkout
          </li>
          <li className="p-4  rounded-xl hover:bg-gray-800 hover:dark:bg-gray-600">
            Orders
          </li>
        </ul>
        <div className="pl-[50px] flex items-center">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <div className="hover:bg-slate-700 ml-12 p-2 rounded-full">
            <SlBasket size={"2rem"} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
