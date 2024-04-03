import { useTranslation } from "react-i18next";
function Text() {
  const { t, i18n } = useTranslation();
  return (
    <section className="py-20 items-center flex flex-wrap flex-row">
      <div className=" text-white translate-x-[600px] flex flex-row gap-2 sm:gap-x-6  items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          {t("We love")}
        </h1>
        <div className="stats bg-primary shadow  dark:bg-secondary">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest cursor-pointer">
              {t("Comfy")}
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 translate-y-32 -translate-x-40 text-white max-w-2xl mx-auto ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
        quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio
        aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed
        officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
      </p>
    </section>
  );
}

export default Text;
