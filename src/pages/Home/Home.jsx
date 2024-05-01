import Header from "../../components/Header/Header";
import Hero from "../../components/HeroText/Hero";
import HomeProducts from "../../components/HomeProducts/HomeProducts";
import Slider from "../../components/Slider/Slider";
import { ToastContainer } from "react-toastify";
function Home() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header></Header>
      <div>
        <div className="flex">
          <Hero></Hero>
          <Slider></Slider>
        </div>
        <HomeProducts></HomeProducts>
      </div>
    </>
  );
}

export default Home;
