import React from "react";
import img2 from "../assets/img1.png";
import img5 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img11 from "../assets/img11.png";
import img10 from "../assets/img10.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import {
  FaBath,
  FaPumpSoap,
  FaToiletPaper,
  FaSoap,
  FaTint,
  FaLongArrowAltRight,
  FaShoppingCart,
} from "react-icons/fa";
import { GiTowel } from "react-icons/gi";

const Home = () => {
  return (
    <div className=" flex flex-col gap-2 p-3 h-screen">
      {/*** fst row containg text img2, grid */}
      <div className="flex sm:flex-row bg-grey-400 h-2/3 gap-2 w-full rounded-lg ">
        {/**text div */}
        <div className="flex  h-full gap-2 w-2/3">
          <div className="flex flex-col w-1/2 h-full bg-blue-900 rounded-lg shadow-lg p-6">
            <div className="flex-1 flex flex-col justify-center space-y-4">
              <h1 className="text-white text-5xl font-extrabold tracking-wide">
                Hygiene
              </h1>
              <h2 className="text-green-400 text-5xl font-extrabold tracking-wide">
                Platform
              </h2>
            </div>
            <div className="flex-1 flex flex-col ">
              <p className="text-white text-lg leading-relaxed ">
                Your trusted platform for reliable hygiene solutions, ensuring a
                cleaner and healthier tomorrow.
              </p>
            </div>
            <div className="flex">
              <button className="flex bg-green-500 text-white text-lg font-semibold py-3 px-8 rounded-3xl shadow-md hover:bg-green-600 transition duration-300">
                Check New Offers
                <FaLongArrowAltRight size={30} className=" ml-2" />
              </button>
            </div>
          </div>

          {/**image 2 div */}
          <div className="w-1/2 h-full bg-green-100 rounded-lg relative group">
            <div className="flex mx-20 absolute top-10 left-0 right-0 p-4 text-blue-900">
              <GiTowel size={40} />
              <h1 className="text-3xl font-extrabold mx-auto">Combo at $299</h1>
            </div>

            <img
              src={img10}
              alt=""
              className="mx-auto w-full h-full transition duration-700 ease-in-out  group-hover:blur-sm"
            />
            <div className="flex flex-row justify-center items-center gap-4 relative bottom-20">
              <button className="flex gap-2 bg-blue-800 text-white px-10 py-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add to Cart
                <FaShoppingCart size={25} />
              </button>
              <button className="flex gap-2 bg-blue-800 text-white px-10 py-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Buy now
                <FaShoppingCart size={25} />
              </button>
            </div>
          </div>
        </div>
        {/**grid image div */}
        <div className="w-1/3 space-y-2 flex flex-col">
          <div className="w-full flex gap-2 h-1/2">
            <div className="relative w-1/2 bg-yellow-100 rounded-lg group">
              <div className="flex justify-between absolute bottom-0 left-0 right-0 p-4 text-blue-900">
                <FaBath size={30} />
                <h1 className="pt-1 font-serif">4 x combo</h1>
                <span className="text-xl">$45.00</span>
              </div>
              <img
                src={img2}
                alt="Soap Image"
                className="w-full h-full object-contain group-hover:blur-sm ease-in-out transition duration-700 transform translate-y-[-20px]"
              />
              <button className="flex absolute gap-2 bottom-12 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white px-3 py-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Buy now
                <FaShoppingCart size={25} />
              </button>
            </div>

            <div className="w-1/2 bg-blue-100 rounded-lg relative overflow-hidden group">
              <div className="flex justify-between absolute bottom-0 left-0 right-0 p-4 text-blue-900">
                <FaPumpSoap size={30} />
                <h1 className="pt-1 font-serif">Sanitizer</h1>
                <span className="text-xl">$8.15</span>
              </div>
              <img
                src={img3}
                alt=""
                className="w-full h-full object-contain group-hover:blur-sm ease-in-out transition duration-700 transform translate-x-12 translate-y-2"
              />
              <button className="flex absolute gap-2 bottom-12 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white px-3 py-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Buy now
                <FaShoppingCart size={25} />
              </button>
            </div>
          </div>
          <div className="flex gap-2 h-1/2">
            <div className="w-1/2 bg-blue-100 rounded-lg relative overflow-hidden group">
              <div className="flex justify-between absolute bottom-0 left-0 right-0 p-4 text-blue-900">
                <FaSoap size={30} />
                <h1 className="pt-1 font-serif">Lotion</h1>
                <span className="text-xl">$13.00</span>
              </div>
              <img
                src={img4}
                alt=""
                className="w-full h-full object-contain group-hover:blur-sm ease-in-out transition duration-700"
              />
              <button className="flex absolute gap-2 bottom-12 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white px-3 py-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Buy now
                <FaShoppingCart size={25} />
              </button>
            </div>
            <div className="w-1/2 bg-yellow-100 rounded-lg relative overflow-hidden group">
              <div className="flex justify-between absolute bottom-0 left-0 right-0 p-4 text-blue-900">
                <FaPumpSoap size={30} />
                <h1 className="pt-1 font-serif">Protection</h1>
                <span className="text-xl">$10.70</span>
              </div>
              <img
                src={img5}
                alt=""
                className="w-full h-full object-contain  transform translate-x-12 translate-y-4 group-hover:blur-sm ease-in-out transition duration-700"
              />
              <button className="flex absolute gap-2 bottom-12 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white px-3 py-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Buy now
                <FaShoppingCart size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*** 2nd row 3 images */}
      <div className="flex sm:flex-row gap-2 h-1/3 w-full">
        {/*** img 6 */}
        <div className="bg-red-200 w-1/3 rounded-lg relative overflow-hidden group">
          <div className="flex  absolute  top-2  right-2  bg-white rounded-full">
            <h1 className="p-2">30%</h1>
          </div>
          <div className="flex flex-col justify-center space-y-4 left-4 absolute h-full w-1/2 top-0  right-0 p-4 text-blue-900">
            <h1 className="pt-1 font-extrabold text-4xl">Soaps</h1>
            <span className="text-lg">Lux</span>
            <FaBath size={30} />
            <span className="text-xl">$10.00</span>
          </div>
          <img
            src={img7}
            alt=""
            className="w-full h-full object-cover transform duration-700 group-hover:blur-sm"
          />
          <button className="flex absolute gap-2 bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white px-10 py-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Buy now
            <FaShoppingCart size={25} />
          </button>
        </div>
        {/*** img 7 */}
        <div className="bg-violet-300 w-1/3 rounded-lg relative overflow-hidden group">
          <div className="flex  absolute  top-2  right-2  bg-white rounded-full">
            <h1 className="p-2">20%</h1>
          </div>
          <div className="flex flex-col justify-center space-y-4 h-full w-1/2  absolute bottom-0 left-4 right-0 p-4 text-blue-900">
            <h1 className="pt-1 font-extrabold text-4xl ">Lotion</h1>
            <span>Brand Cream</span>
            <FaTint size={30} />
            <span className="text-xl">$10.00</span>
          </div>
          <img
            src={img8}
            alt=""
            className="w-full h-full  object-cover transform translate-x-28 duration-700 group-hover:blur-sm"
          />
          <button className="flex absolute gap-2 bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white px-10 py-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Buy now
            <FaShoppingCart size={25} />
          </button>
        </div>
        {/*** img 8 */}
        <div className="bg-green-300 w-1/3 rounded-lg relative overflow-hidden group">
          <div className="flex  absolute  top-2  right-2  bg-white rounded-full">
            <h1 className="p-2">40%</h1>
          </div>
          <div className="flex flex-col justify-center space-y-4 h-full w-1/2  absolute bottom-0 left-4 right-0 p-4 text-blue-900">
            <h1 className="pt-1 font-extrabold text-4xl">Face Cream</h1>
            <span>Johnson's Cream</span>
            <FaToiletPaper size={40} />
            <span className="text-xl">$10.00</span>
          </div>
          <img
            src={img9}
            alt=""
            className="w-full h-full object-cover translate-x-28 translate-y-4 transform duration-700 group-hover:blur-sm"
          />
          <button className="flex absolute gap-2 bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white px-10 py-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Buy now
            <FaShoppingCart size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
