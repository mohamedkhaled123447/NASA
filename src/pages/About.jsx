import React from "react";

const About1 = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            We are a team of science and exploration enthusiasts, driven by a
            mission to make the discovery of the universe's secrets accessible
            to everyone, regardless of age or background. We believe that
            curiosity is the key to understanding, and that everyone deserves
            the chance to explore the beauty and mystery of the cosmos. Through
            our project, we aim to simplify complex scientific information and
            transform it into an enjoyable, interactive experience. We are here
            to inspire the next generation of explorers, encouraging them to
            look up at the stars and wonder what lies beyond.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full rounded-xl"
            src="http://192.168.1.2:8000/media/about.jpeg"
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:pt-8">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-4">
            <div className="p-4 pb-6 flex justify-center flex-col items-center shadow-lg rounded-md transform transition-transform duration-300 hover:scale-110" >
              <img
                className=" md:block hidden h-64"
                src="http://192.168.1.2:8000/media/profile/mohamed.jpg"
                alt="Alexa featured Img"
              />
              <img
                className=" md:hidden block h-64"
                src="http://192.168.1.2:8000/media/profile/mohamed.jpg"
                alt="Alexa featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Mohamed
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center shadow-lg rounded-md transform transition-transform duration-300 hover:scale-110">
              <img
                className=" md:block hidden h-64"
                src="http://192.168.1.2:8000/media/profile/saeed.jpg"
                alt="Olivia featured Img"
              />
              <img
                className=" md:hidden block h-64"
                src="http://192.168.1.2:8000/media/profile/saeed.jpg"
                alt="Olivia featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Saeed
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center shadow-lg rounded-md transform transition-transform duration-300 hover:scale-110">
              <img
                className=" md:block hidden h-64"
                src="http://192.168.1.2:8000/media/profile/ahmed.jpg"
                alt="Liam featued Img"
              />
              <img
                className=" md:hidden block h-64"
                src="http://192.168.1.2:8000/media/profile/ahmed.jpg"
                alt="Liam featued Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Ahmed
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center shadow-lg rounded-md transform transition-transform duration-300 hover:scale-110">
              <img
                className=" md:block hidden h-64"
                src="http://192.168.1.2:8000/media/profile/ayman.jpeg"
                alt="Elijah featured img"
              />
              <img
                className=" md:hidden block h-64"
                src="http://192.168.1.2:8000/media/profile/ayman.jpeg"
                alt="Elijah featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Ayman
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center shadow-lg rounded-md transform transition-transform duration-300 hover:scale-110">
              <img
                className=" md:block hidden h-64"
                src="http://192.168.1.2:8000/media/profile/yousef.jpg"
                alt="Elijah featured img"
              />
              <img
                className=" md:hidden block h-64"
                src="http://192.168.1.2:8000/media/profile/yousef.jpg"
                alt="Elijah featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Yousef
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
