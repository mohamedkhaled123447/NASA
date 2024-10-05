import React from "react";
import { Typography } from "@material-tailwind/react";
import { discoveries } from "../../utils/MostUsed";
function DiscoveriesSection() {
  return (
    <section className="py-20 px-4 md:px-16  bg-gray-100">
      <Typography
        variant="h2"
        className="text-3xl md:text-4xl text-black text-center mb-12"
      >
        Notable Discoveries by the James Webb Telescope
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {discoveries.map((discovery, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={discovery.image}
              alt={discovery.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <Typography
              variant="h4"
              className="text-xl font-semibold text-black mb-2"
            >
              {discovery.title}
            </Typography>
            <Typography className="text-gray-600">
              {discovery.description}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DiscoveriesSection;
