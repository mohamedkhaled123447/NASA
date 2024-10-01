import React from "react";
import { Carousel } from "@material-tailwind/react";
function Home() {
  return (
    <div className="p-4">
      <video className="h-full w-full rounded-lg mb-4" autoPlay muted>
        <source
          src="http://192.168.1.2:8000/media/videos/Intro.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Carousel transition={{ duration: 2 }} className="rounded-xl">
        <video className="h-full w-full rounded-lg" autoPlay muted>
          <source
            src="http://192.168.1.2:8000/media/videos/video1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <video className="h-full w-full rounded-lg" autoPlay muted>
          <source
            src="http://192.168.1.2:8000/media/videos/video2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <video className="h-full w-full rounded-lg" autoPlay muted>
          <source
            src="http://192.168.1.2:8000/media/videos/video3.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <video className="h-full w-full rounded-lg" autoPlay muted>
          <source
            src="http://192.168.1.2:8000/media/videos/video4.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <video className="h-full w-full rounded-lg" autoPlay muted>
          <source
            src="http://192.168.1.2:8000/media/videos/video5.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Carousel>
    </div>
  );
}

export default Home;
