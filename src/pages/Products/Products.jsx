import AllProducts from "../../components/Products/AllProducts";
import Header from "../../components/Header/Header";
import { useRef } from "react";
import { useState } from "react";
function Products() {
  const searchRef = useRef();
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(1000);
  return (
    <div className="">
      <Header></Header>
      <div>
        <div className="ml-[220px] mr-[220px] mt-8 filter p-4 bg-primary-content rounded-lg ">
          <div className="filter-top flex justify-between gap-3">
            <div className="field flex flex-col gap-1 w-1/4">
              <label htmlFor="search" className="cursor-pointer">
                Serarch Products
              </label>
              <input
                type="search"
                id="search"
                className="input input-bordered w-full max-w-xs input-sm"
                ref={searchRef}
              />
            </div>
            <div className="field flex flex-col gap-1 w-1/4">
              <label className="cursor-pointer">Select Category</label>
              <select
                className="select select-bordered w-full max-w-xs select-sm"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option disabled selected>
                  all
                </option>
                <option value="tables">Tables</option>
                <option value="chairs">Chairs</option>
                <option value="chairs">Kids</option>
                <option value="chairs">Sofas</option>
                <option value="beds">Beds</option>
              </select>
            </div>
            <div className="field flex flex-col gap-1 w-1/4">
              <label className="cursor-pointer">Select Company</label>
              <select className="select select-bordered w-full max-w-xs select-sm">
                <option disabled selected>
                  all
                </option>
                <option value="modenza">Modenza</option>
                <option value="luxora">Luxora</option>
                <option value="artifex">Artifex</option>
                <option value="comfora">Comfora</option>
                <option value="hommestead">Hommestead</option>
              </select>
            </div>
            <div className="field flex flex-col gap-1 w-1/4">
              <label className="cursor-pointer">Sort By</label>
              <select className="select select-bordered w-full max-w-xs select-sm">
                <option disabled selected>
                  a-z
                </option>
                <option value="">z-a</option>
                <option value="">high</option>
                <option value="">low</option>
              </select>
            </div>
          </div>
          <div className="filter-bottom mt-8 flex justify-between gap-3 items-center">
            <div className="rageee w-1/4">
              <div className="range-title flex justify-between items-canter mb-1">
                <p>Select Price</p>
                <p>${price / 100}</p>
              </div>
              <div className="range-field">
                <input
                  type="range"
                  min={0}
                  max="100000"
                  onChange={(e) => setPrice(e.target.value)}
                  className="range range-primary"
                />
              </div>

              <div className="range-max-min flex justify-between items-canter mb-1">
                <span className="font-bold">0</span>
                <span className="font-bold">Max : $1,000.00</span>
              </div>
            </div>
            <div className="check w-1/4 ">
              <div className="form-control ">
                <label className="label cursor-pointer flex flex-col gap-1 ">
                  <span className="label-text">Free shipping</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
              </div>
            </div>
            <div className="buttons w-2/4 flex justify-between gap-3">
              <button className="btn btn-primary w-2/4">SEARCH</button>
              <button className="btn btn-secondary w-2/4">RESET</button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <span className="flex justify-start ml-[240px] translate-y-16 text-white items-center">
          22 products
        </span>
        <hr className="translate-y-20 text-black mr-[220px] ml-[220px]" />
        <AllProducts></AllProducts>
      </div>
    </div>
  );
}

export default Products;
