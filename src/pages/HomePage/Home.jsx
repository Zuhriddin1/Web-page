import Header from "../../components/Header/Header";
import Hero from "../../components/HeroText/Hero";
import HomeProducts from "../../components/HomeProducts/HomeProducts";
import Slider from "../../components/Slider/Slider";
function Home() {
  return (
    <>
    <Header></Header>
    <div>
      <div>
        <Hero></Hero>
        <Slider></Slider>
      </div>
      <HomeProducts></HomeProducts>
    </div>
    </>
  );
}

export default Home;
