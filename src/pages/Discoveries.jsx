import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
function Discoveries() {
  const [videos, setVideos] = useState([]);

  // Fetch videos from API or use static data
  const fetchVideos = async () => {
    const response = await fetch("http://192.168.1.2:8000/api/v1/video/");
    const data = await response.json();
    setVideos(data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <section className=" dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Videos Gallery
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <iframe
                width="100%"
                height="300"
                src={`https://www.youtube.com/embed/${video.youtube_id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {video.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center p-5">
        <a href="/test">
          <Button>Test your Knowledge</Button>
        </a>
      </div>
    </section>
  );
}

export default Discoveries;
