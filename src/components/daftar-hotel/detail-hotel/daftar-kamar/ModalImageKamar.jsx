import React, { useState } from "react";
import DetailKamarCarousel from "../DetailKamarCarousel";
import "./ModalImageKamar.css";

const ModalImageKamar = ({ dataImage, setModal }) => {
  const [indexImg, setIndexImg] = useState(0);

  return (
    <div className="fixed z-100 duration-500 top-0 right-0 left-0 bottom-0 flex flex-col bg-gray-900/75 h-screen">
      <div className="text-white 2xl:text-4xl text-xl flex justify-end px-32 pt-5 mb-5">
        <h1 className="cursor-pointer border border-white text-center rounded-full" onClick={() => setModal(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
            <path
              fill="white"
              d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
            />
          </svg>
        </h1>
      </div>

      <div className="flex flex-col gap-5 h-full items-center">
        <DetailKamarCarousel imgUrl={dataImage} indexImg={indexImg} setIndexImg={setIndexImg} />

        <div
          className={`flex flex-wrap ${
            dataImage?.length <= 4 ? "justify-center" : ""
          } w-4/5 gap-5 overflow-y-scroll 2xl:h-40 xl:h-36 h-28 xl:mt-4 scrollBar px-2`}
        >
          {dataImage?.map((url, idx) => (
            <img
              src={url.image_url}
              alt=""
              className={`2xl:w-40 xl:w-36 w-28 h-36 rounded-3xl cursor-pointer duration-100 object-cover ${
                indexImg === idx ? "border-4 border-[#0080FF]" : null
              }`}
              onClick={() => setIndexImg(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalImageKamar;
