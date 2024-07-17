import React, { useState } from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import Img5 from "../assets/Room_4.png";
import Img6 from "../assets/Room_2.png";
import Img7 from "../assets/Room_1.png";
import Img8 from "../assets/Room_3.png";

const Carousel = () => {
  const images = [Img5, Img6, Img7, Img8]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="flex flex-col items-center mx-4 md:mx-9 cursor-pointer">
      <div className="flex justify-between items-center w-full mb-4">
        <button onClick={prevSlide} className="flex items-center">
          <IoMdArrowRoundBack className="text-3xl text-gray-500" />
          <p className="text-xl ml-2">Prev</p>
        </button>
        <button onClick={nextSlide} className="flex items-center">
          <p className="text-xl mr-2">Next</p>
          <IoMdArrowRoundForward className="text-3xl" />
        </button>
      </div>
      <div className="flex justify-center mb-4">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="rounded-xl h-80 w-full max-w-md"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className={`rounded-xl h-32 w-full object-cover cursor-pointer ${currentIndex === index ? 'border-2 border-blue-500' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;