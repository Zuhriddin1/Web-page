import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Register() {
  const [loading, setLoading] = useState();
  const UserName = useRef("");
  const UserEmail = useRef("");
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
        UserEmail: UserEmail.current.value,
        UserPassword: UserPassword.current.value,
      };
      setLoading(true);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/login");
      setLoading(false);
      // fetch("https://auth-rg69.onrender.com/api/auth/signup", {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify(user),
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     if (data.messega == "User registered successfully!") {
      //       navigate("/login");
      //     }
      //     if (data.messega == "Failed! Email is already in use!") {
      //       alert(data.messega);
      //       UserEmail.current.focus();
      //     }
      //     if (data.messega == "Failed! Username is already in use!") {
      //       alert(data.messega);
      //       UserName.current.focus();
      //     }
      //     UserName.current.value = "";
      //     UserEmail.current.value = "";
      //     UserPassword.current.value = "";
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   })
      //   .finally(() => {
      //     setLoading(false);
      //   });
    }
  }
  return (
    <>
      <div className="container flex items-center justify-center ml-[0px] mt-[30px] text-white">
        <section className="h-screenreen grid place-items-center">
          <form className="card p-8" onSubmit={handleSubmit}>
            <h4 className="text-center text-3xl font-bold block mt-16 text-white">
              Register
            </h4>
            <div className="mb-3 mt-3">
              <span className="flex ml-3 mt-5 mb-5">User Name</span>
              <label
                for="username"
                className=" input input-bordered p-3  items-center"
              >
                <input ref={UserName} type="text" className="grow pr-12" />
              </label>
            </div>
            <div className="flex mt-5 mb-4 flex-col">
              <span className="pl-2 mb-2">Email</span>
              <label className="input input-bordered items-center">
                <input type="email" ref={UserEmail} className="grow  mt-3" />
              </label>
            </div>
            <div className="flex flex-col">
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
            </div>
            <p className="mt-5">
              Already a member?
              <NavLink
                to={"/login"}
                className="ml-5 hover:bg-slate-700 p-3 rounded-lg"
              >
                Log In
              </NavLink>
            </p>
          </form>
        </section>
      </div>
    </>
  );
}
export default Register;
