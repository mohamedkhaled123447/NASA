import React from "react";
import { Typography } from "@material-tailwind/react";
function IntroSection() {
  return (
    <section className="py-20 px-4 md:px-16 text-center">
      <Typography
        variant="h2"
        className="mb-3 text-3xl md:text-5xl md:text-left text-black"
      >
        Hi, <span className="text-blue-600">Explorer!</span>
      </Typography>
      <Typography
        variant="h2"
        className="mb-3 text-3xl md:text-5xl md:text-left text-black"
      >
        Unvile the <span className="text-blue-600">cosmos</span> throught the
        innovation
      </Typography>
      <Typography
        variant="h2"
        className="mb-3 text-3xl md:text-4xl md:text-left text-black"
      >
        Embark on Your Own Exploratory Journey!
      </Typography>
      <div className="mt-8">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/PUXOx6XBpFs"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default IntroSection;
