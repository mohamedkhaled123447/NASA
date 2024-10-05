import { Button, Typography } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
function VisualJourneySection() {
  const [data, setData] = React.useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchDate = async (type) => {
    const response = await fetch(
      `http://192.168.1.2:8000/api/v1/gallery/?type=${type}`
    );
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    fetchDate("universe");
  }, []);

  // Handlers to navigate between images
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };
  if (data.length === 0) {
    return <div>Loading...</div>; // or a loading spinner
  }
  return (
    <section className="py-20 px-4 md:px-16 flex flex-col items-center">
      {/* Section Title */}
      <Typography
        variant="h2"
        className="text-3xl md:text-4xl text-black text-center mb-8"
      >
        James Webb Telescope: A Visual Journey
      </Typography>

      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Image Section */}
        <div className="md:w-1/2 p-4">
          <img
            src={data[currentIndex].image}
            alt="James Webb Telescope"
            className="w-full rounded-lg shadow-lg h-80"
          />
        </div>

        {/* Description Section */}
        <div className="md:w-1/2 p-4">
          <Typography variant="h4" className="text-black">
            {data[currentIndex].description}
          </Typography>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center space-x-4 mt-6">
        <Button onClick={handlePrevious} color="purple" variant="outlined">
          <ChevronLeftIcon className="w-6 h-6" />
        </Button>
        <Button onClick={handleNext} color="purple" variant="outlined">
          <ChevronRightIcon className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
}

export default VisualJourneySection;
