import AllProducts from "../../components/Products/AllProducts";
import Header from "../../components/Header/Header";

function Products() {
  return (
    <div className="">
      <Header></Header>
      <div className="">
        <span className="flex justify-start ml-[240px] translate-y-16 text-white items-center">
          22 products
        </span>
        <hr  className="translate-y-20 text-black mr-[220px] ml-[220px]"/>
        <AllProducts></AllProducts>
      </div>
    </div>
  );
}

export default Products;
