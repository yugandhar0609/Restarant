import React, { useEffect, useRef, useState } from "react";
import img4 from "../assets/Banner.png";
import { GiCentaurHeart } from "react-icons/gi";
import { RiVisaFill } from "react-icons/ri";
import { LuSchool } from "react-icons/lu";
import { GiBank } from "react-icons/gi";
import { IoRestaurantOutline } from "react-icons/io5";
import { GrUserPolice } from "react-icons/gr";
import { PiMapPin } from "react-icons/pi";
import { MdOutlineSchool } from "react-icons/md";
import img from "../assets/About.png";
import { FaStar } from "react-icons/fa6";
import Img5 from "../assets/Room_4.png";
import Img6 from "../assets/Gallery_2.png";
import Img7 from "../assets/Room_1.png";
import Img8 from "../assets/Room_3.png";
import logo from "../assets/logo_png.png";
import Carousel from "./Carousel";
import axios from "axios";
import toast from "react-hot-toast";
// import logos from "../assets/logo_png.png";
import { RiFacebookBoxLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import {
  FaEnvelope,
  FaMobileAlt,
  FaMapMarkedAlt,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const roomsRef = useRef(null);
  const footerRef = useRef(null);
  const [formData, setFormData] = useState({
    userName: "",
    phonNumber: "",
    email: "",
    location: "",
    date: "",
  });
  // Load cached form data on component mount
  useEffect(() => {
    const cachedFormData = localStorage.getItem("formData");
    if (cachedFormData) {
      setFormData(JSON.parse(cachedFormData));
    }
  }, []);

  // Update cached form data whenever formData changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://restaurant-backend-ddwv.onrender.com/post",
        formData
      );
      console.log("User registered:", response.data);
      toast.success("User registered successfully!");

      // Reset form data
      setFormData({
        userName: "",
        phonNumber: "",
        email: "",
        location: "",
        date: "",
      });
    } catch (error) {
      console.error("There was an error registering the user!", error);
      toast.error(
        error.response?.data?.message || "There was an error registering the user!"
      );
    }
  };


  return (
    <div>
      <section className="relative w-full h-screen">
        <div className="relative w-full h-full">
          <img src={img4} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-5">
          <div className="absolute top-0 bg-white bg-opacity-70 p-2 rounded">
              <Link to="https://maahotels.in">
              <img src={logo} alt="Logo" className="w-44" />
            </Link>
            </div>

            <div className="mt-[400px] text-center ">
              <p className="text-2xl md:text-4xl ">Best Service Apartment</p>
              <p className="text-2xl md:text-4xl">in Greams Road</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-5 mt-5">
              <button
                className="px-5 py-2 text-sm md:text-lg bg-black bg-opacity-60 rounded hover:bg-opacity-80"
                onClick={() => {
                  footerRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                CALL NOW
              </button>
              <button
                className="px-5 py-2 text-sm md:text-lg bg-black bg-opacity-60 rounded hover:bg-opacity-80"
                onClick={() => {
                  roomsRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                BOOK NOW
              </button>
            </div>
            <div className="bg-gray-200 w-full md:w-2/3 h-auto mt-40 mx-auto rounded p-3 text-black">
              <h3 className="text-center text-gray-700 text-lg md:text-xl mb-4 md:mb-6 mt-15">
                Nearby Maa Residency
              </h3>
              <div className="flex flex-wrap justify-center md:justify-evenly items-center gap-4 md:gap-2">
                <div className="flex items-center p-2 md:p-3 rounded-lg cursor-pointer w-40 md:w-auto">
                  <GiCentaurHeart className="text-xl" />
                  <p className="text-sm md:text-md ml-2 whitespace-nowrap">
                    Apollo Heart Centre
                  </p>
                </div>
                <div className="flex items-center p-2 md:p-3 rounded-lg cursor-pointer w-40 md:w-auto">
                  <RiVisaFill className="text-xl" />
                  <p className="text-sm md:text-md ml-2 whitespace-nowrap">
                    Global Visa Centre
                  </p>
                </div>
                <div className="flex items-center p-2 md:p-3 rounded-lg cursor-pointer w-40 md:w-auto">
                  <LuSchool className="text-xl" />
                  <p className="text-sm md:text-md ml-2 whitespace-nowrap">
                    Matriculation School
                  </p>
                </div>
                <div className="flex items-center p-2 md:p-3 rounded-lg cursor-pointer w-40 md:w-auto">
                  <GiBank className="text-xl" />
                  <p className="text-sm md:text-md ml-2 whitespace-nowrap">
                    CBS bank/ATM
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-evenly items-center gap-4 md:gap-2 mb-4 md:mb-10">
                <div className="flex items-center p-4 md:p-8 rounded-lg cursor-pointer w-40 md:w-auto">
                  <IoRestaurantOutline className="text-xl" />
                  <p className="text-sm md:text-md ml-2 whitespace-nowrap">
                    Multi Restaurants
                  </p>
                </div>
                <div className="flex items-center p-2 md:p-3 rounded-lg cursor-pointer w-40 md:w-auto">
                  <GrUserPolice className="text-xl" />
                  <p className="text-sm md:text-md ml-2 whitespace-nowrap">
                    Police Station
                  </p>
                </div>
                <div className="flex items-center p-2 md:p-3 rounded-lg cursor-pointer w-40 md:w-auto">
                  <PiMapPin className="text-xl" />
                  <p className="text-sm md:text-md ml-2 whitespace-nowrap">
                    5Minreact AnnaSalai
                  </p>
                </div>
                <div className="flex items-center p-2 md:p-3 rounded-lg cursor-pointer w-40 md:w-auto">
                  <MdOutlineSchool className="text-xl" />
                  <p className="text-sm md:text-md ml-2 whitespace-nowrap">
                    Exhiraj College
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 md:px-8 lg:px-32 gap-8 mt-80 md:mt-auto lg:mt-[100px] m-10">
        <div className="w-full lg:w-3/4 space-y-4">
          <h1 className="text-2xl md:text-4xl font-semibold text-center lg:text-left text-gray-500">
            Our Vision And Mission
          </h1>
          <p className="text-justify lg:text-left mt-8 font-semibold text-sm md:text-base">
            Maa Group of Companies is a distinguished name in the world of
            hospitality. Established in 2018, our journey began with the
            operation of Hotel MAA Serviced Apartment near Apollo Hospital
            Greams Road. Over the years, we've expanded to offer a budget-class
            hotel with 25 keys, catering to budget travelers. In response to the
            growing demand for luxury at affordable prices, we proudly
            introduced Maa Grand, redefining the standards of hospitality in
            Tamil Nadu. Our commitment to excellence and impeccable service has
            made us the #1 choice for all your hospitality needs. Discover
            quality, comfort, and affordability with Maa Group of companies.
            Your satisfaction is our priority.
          </p>
          <div className="flex items-center gap-2 md:gap-4 cursor-pointer">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <p className="ml-2 text-yellow-700 text-md">view reviews</p>
          </div>
        </div>
        <div className="w-full lg:w-3/4 h-auto">
          <img className="rounded-lg w-full h-auto" src={img} alt="About" />
        </div>
      </div>
      <h3 className="text-center text-gray-500 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6">
        Amenities/Facilities
      </h3>
      <div className="flex justify-center m-5">
        <div className="grid grid-cols-4 gap-1 max-w-[800px]">
          <div className="border-l-0 border-r-2 border-b-2 border-black p-2 text-center text-[chocolate]">
            Room with kitchen
          </div>
          <div className="border-l-0 border-r-2 border-b-2 border-black p-2 text-center text-[chocolate]">
            Living room
          </div>
          <div className="border-l-0 border-r-2 border-b-2 border-black p-2 text-center text-[chocolate]">
            Dining area
          </div>
          <div className="border-l-0 border-b-2 border-black p-2 text-center text-[chocolate]">
            Sofa
          </div>

          <div className="border-l-0 border-b-2 border-r-2 border-black p-2 text-center text-[chocolate]">
            Balcony
          </div>
          <div className="border-l-0 border-b-2 border-r-2 border-black p-2 text-center text-[chocolate]">
            Free wifi
          </div>
          <div className="border-l-0 border-b-2 border-r-2 border-black p-2 text-center text-[chocolate]">
            AC / TV
          </div>
          <div className="border-l-0 border-b-2 border-black p-2 text-center text-[chocolate]">
            Geyser
          </div>

          <div className="border-l-0 border-b-2 border-r-2 border-black p-2 text-center text-[chocolate]">
            Washing Machine
          </div>
          <div className="border-l-0 border-b-2 border-r-2 border-black p-2 text-center text-[chocolate]">
            Fridge
          </div>
          <div className="border-l-0 border-b-2 border-r-2 border-black p-2 text-center text-[chocolate]">
            24/7 Check in
          </div>
          <div className="border-l-0 border-b-2 border-black p-2 text-center text-[chocolate]">
            Power backup
          </div>

          <div className="border-l-0 border-b-0 border-r-2 p-2 border-black text-center text-[chocolate]">
            Desk
          </div>
          <div className="border-l-0 border-b-0 border-r-2 p-2  border-black text-center text-[chocolate]">
            Intercom
          </div>
          <div className="border-l-0 border-b-0 border-r-2 p-2 border-black text-center text-[chocolate]">
            Lift
          </div>
          <div className="border-l-0 border-b-0  p-2 text-center border-black text-[chocolate]">
            Car parking
          </div>
        </div>
      </div>
      <div ref={roomsRef}>
        <h3 className="text-center text-gray-500 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6">
          Rooms
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 mx-4 md:mx-9 cursor-pointer">
          <div className="flex flex-col items-center rounded-lg shadow-md p-4">
            <img
              src={Img5}
              alt="UK"
              className="mb-4 rounded-md object-cover w-60 h-60 hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold mb-4">Double bedroom</h3>
          </div>
          <div className="flex flex-col items-center rounded-lg shadow-md p-4">
            <img
              src={Img6}
              alt="Australia"
              className="mb-4 rounded-md object-cover w-60 h-60 hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold mb-4">
              King size single room
            </h3>
          </div>
          <div className="flex flex-col items-center rounded-lg shadow-md p-4">
            <img
              src={Img7}
              alt="USA"
              className="mb-4 rounded-md object-cover w-60 h-60 hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold mb-4">
              Queen size single room
            </h3>
          </div>
          <div className="flex flex-col items-center rounded-lg shadow-md p-4">
            <img
              src={Img8}
              alt="Canada"
              className="mb-4 rounded-md object-cover w-60 h-60 hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold mb-4">
              Extra Large single room
            </h3>
          </div>
        </div>
      </div>
      <h3 className="text-center text-gray-500 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-10">
        Gallery
      </h3>
      <Carousel />
      <p class="text-center text-lg font-bold text-gray-700 mt-5">
        Call Us : 9865434210 | 044-9876452312 | 9087653412 | Email :
        user@gmail.com
      </p>
      <div className="flex justify-center py-5">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-start gap-4 p-5">
          <div className="w-full lg:w-1/2 p-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7773.244143178587!2d80.24817438655302!3d13.059711350435744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526715fbeeff8f%3A0xa06f234699827541!2sGems%20road%20chennai!5e0!3m2!1sen!2sin!4v1720004549356!5m2!1sen!2sin"
              width="100%"
              height="280"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="text-gray-700 mt-4">
              Location: Greams road, Thousand light, Chennai.
            </p>
          </div>

          <div className="hidden lg:block border-l-2 border-black h-60 mt-10"></div>
          <div className="w-full lg:w-1/2 flex justify-center items-center p-8 bg-gray-100 rounded-lg shadow-md mt-10">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                <input
                  type="text"
                  name="userName"
                  placeholder="Full Name"
                  value={formData.userName}
                  onChange={handleChange}
                  className="w-full md:w-1/2 px-4 py-2 border rounded-md"
                />
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full md:w-1/2 px-4 py-2 border rounded-md"
                >
                 <option value="">Select Location</option>
                  <option value="chennai">Chennai</option>
                  <option value="singapore">Singapore</option>
                  <option value="malaysia">Malaysia</option>
                  <option value="delgi">Delgi</option>
                </select>
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                <input
                  type="number"
                  name="phonNumber"
                  placeholder="Phone Number"
                  value={formData.phonNumber}
                  onChange={handleChange}
                  className="w-full md:w-1/2 px-4 py-2 border rounded-md"
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full md:w-1/2 px-4 py-2 border rounded-md"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full md:w-1/2 px-4 py-2 border rounded-md"
                />
                <button
                  type="submit"
                  className="w-full md:w-1/2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300 cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="p-8" ref={footerRef}>
        <div className="bg-gray-200 py-10 relative overflow-hidden rounded-t-xl">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 backdrop-blur-sm rounded-t-xl p-8">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                {/* <img
                  src={logo}
                  alt="Logo"
                  className="h-18 w-[200px] rounded-full mb-4"
                /> */}
                 <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt="Logo" className="h-18 w-[200px] rounded-full mb-4" />
            </Link>
                <p className="text-md text-[chocolate]">
                  Welcome to Maa Group of Companies, a pioneering entity that
                  embarked on its journey in 2018, with a foray into the Hotel
                  Division.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:col-span-2">
                <div>
                  <h1 className="text-xl font-bold text-left mb-3 text-brown-200">
                    CONTACT US
                  </h1>
                  <div className="flex items-center gap-3 mb-3 text-[chocolate]">
                    <FaEnvelope size={20} />
                    <p>maa.greamsroad@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-3 mb-3 text-[chocolate]">
                    <FaMobileAlt size={25} />
                    <p>9941177234 | 7200247474</p>
                  </div>
                  <div className="flex items-center gap-3 mb-3 text-[chocolate]">
                    <FaMapMarkedAlt size={25} />
                    <p>
                      NO.160, THIRU BUILDING, 2ND FLOOR, THOUSAND LIGHTS,
                      CHENNAI - 600 006.
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-left mb-3 text-brown-200">
                    SOCIAL LINKS
                  </h1>
                  <div className="flex items-center gap-3 mt-6">
                    <a
                      href="https://www.facebook.com/share/YUAxq7M5WFWwRwJ7/?mibextid=LQQJ4d"
                      className="text-[chocolate] hover:text-gray-700"
                    >
                      <RiFacebookBoxLine size={30} className="h-9 w-9" />
                    </a>
                    <a
                      href="https://www.google.co.in/"
                      className="text-[chocolate] hover:text-gray-700"
                    >
                      <FaGoogle size={30} className="h-9 w-9" />
                    </a>
                    <a
                      href="https://www.instagram.com/maa_hotels?igsh=MTZmcjBubmMwdDdrbQ%3D%3D&utm_source=qr"
                      className="text-[chocolate] hover:text-gray-700"
                    >
                      <FaInstagram size={20} className="h-9 w-9" />
                    </a>
                    <a
                      href="#"
                      className="text-[chocolate] hover:text-gray-700"
                    >
                      <CiLinkedin size={20} className="h-9 w-9" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;