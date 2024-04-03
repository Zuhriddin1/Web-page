import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Hero() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="ml-56 mt-40 max-w-2xl">
        <h1 className="text-6xl font-semibold text-white">
          {t("We are changing")} <br />
          {t("the way people shop")} <br />
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">{t("Lorem")}</p>
        <Link to={"/products"}>
          <button className="uppercase btn mt-10 btn-primary dark:btn-secondary">
            {t("OUR PRODUCTS")}
          </button>
        </Link>
      </div>
    </>
  );
}
export default Hero;
