import React from "react";
import {
  CheckCircleIcon,
  StarIcon,
  CameraIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import {Typography } from "@material-tailwind/react";
const features = [
  {
    title: "Powerful Imaging",
    description:
      "The James Webb Telescope captures stunning images of the universe, revealing details of galaxies, stars, and planets.",
    icon: <CameraIcon className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Infrared Capabilities",
    description:
      "Its advanced infrared technology allows Webb to see through dust clouds, uncovering hidden celestial phenomena.",
    icon: <StarIcon className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "High Sensitivity",
    description:
      "Webb is designed to detect faint light from distant objects, making it a powerful tool for astronomers.",
    icon: <CheckCircleIcon className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Global Collaboration",
    description:
      "The telescope is the result of international collaboration, with contributions from agencies worldwide.",
    icon: <GlobeAltIcon className="w-8 h-8 text-purple-600" />,
  },
];

function FeaturesSection() {
  return (
    <section className="py-20 px-4 md:px-16 bg-gray-100">
      <Typography
        variant="h2"
        className="text-3xl md:text-4xl text-black text-center mb-12"
      >
        Features of the James Webb Telescope
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              {feature.icon}
              <Typography
                variant="h4"
                className="ml-2 text-xl font-semibold text-black"
              >
                {feature.title}
              </Typography>
            </div>
            <Typography className="text-gray-600">
              {feature.description}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
