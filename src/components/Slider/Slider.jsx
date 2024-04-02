import Hero from "../../assets/hero.webp";
import Hero2 from "../../assets/hero2.webp";
import Hero3 from "../../assets/hero3.webp";
import Hero4 from "../../assets/hero4.webp";
function Slider() {
  return (
    <div className="hidden h-[28rem] lg:carousel carousel-center w-[500px] p-4 mt-28 ml-20 space-x-4 bg-neutral rounded-box">
      <div className="carousel-item">
        <img
          src={Hero}
          className="rounded-box w-80  ml-5 h-full  object-cover"
          alt=""
        />
        <div className="carousel-item">
          <img
            src={Hero2}
            className="rounded-box w-80 ml-10 h-full  object-cover"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            src={Hero3}
            className="rounded-box w-80  ml-10 h-full  object-cover"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            src={Hero4}
            className="rounded-box w-80  ml-10 h-full  object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
