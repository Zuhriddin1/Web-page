import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const [loading, setLoading] = useState();
  const UserName = useRef("");
  const UserPassword = useRef("");
  const navigate = useNavigate();
  function validate() {
    return true;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const isValide = validate();
    if (isValide) {
      const user = {
        UserName: UserName.current.value,
        UserPassword: UserPassword.current.value,
      };
      setLoading(true);
      const ToHome = JSON.parse(localStorage.getItem("user"));
      if (ToHome.email == user.email && ToHome.password == user.password) {
        localStorage.setItem("user", JSON.stringify(true));
        navigate("/");
      } else {
        alert("Please enter true Password or Email");
      }
    }
  }
  function handleClick() {
    setTimeout(() => {
      navigate("/");
      setTimeout(() => {
        toast.success("Welcome guest user");
      }, 200);
    }, 600);
  }
  return (
    <>
      <div className="container flex items-center justify-center ml-[0px] mt-[50px] text-white">
        <section className="h-screenreen grid place-items-center">
          <form className="card p-8" onSubmit={handleSubmit}>
            <h4 className="text-center text-3xl font-bold block mt-16 text-white">
              Log in
            </h4>
            <div className="mb-3 mt-3">
              <span className="flex ml-3 mt-5 mb-5">User Name</span>
              <label
                for="username"
                className=" input input-bordered p-3  items-center"
              >
                <input ref={UserName} type="text" className="grow pr-16" />
              </label>
            </div>
            <div className="flex flex-col mt-2">
              <span className="pl-2 mb-3">Password</span>
              <label className="input input-bordered items-center gap-2">
                <input
                  type="password"
                  ref={UserPassword}
                  className="grow mt-3"
                />
              </label>
            </div>
            <div className="mt-4">
              <button
                className="btn mt-3 btn-primary mb-3 dark:btn-secondary hover:bg-pink-600 dark:text-white btn-block uppercase"
                type="submit"
                disabled={loading ? true : false}
              >
                {loading ? "Loading..." : "REGISTER"}
              </button>

              <button
                onClick={handleClick}
                className="btn mt-3 bg-purple-600 m b-3 hover:bg-purple-800 dark:bg-purple-600 dark:text-white btn-block uppercase"
                type="submit"
              >
                guest user
              </button>
            </div>
            <p className="mt-5">
              Already a new member?
              <NavLink
                to={"/register"}
                className="ml-5 hover:bg-slate-700 p-3 rounded-lg"
              >
                Register
              </NavLink>
            </p>
          </form>
        </section>
      </div>
    </>
  );
}
export default Login;
