import React, { useEffect, useState } from 'react';
import { resources } from '../utils/MostUsed';
function Resources() {
//   const [resources, setResources] = useState([]);

//   useEffect(() => {
//     const fetchResources = async () => {
//       const response = await fetch('http://192.168.1.2:8000/api/v1/resources/');
//       const data = await response.json();
//       setResources(data);
//     };

//     fetchResources();
//   }, []);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Resources</h2>
      <div className="max-w-4xl mx-auto">
        {resources.length > 0 ? (
          resources.map((resource) => (
            <div key={resource.title} className="mb-6">
              <h3 className="text-xl font-semibold">{resource.title}</h3>
              <p className="text-gray-700">{resource.description}</p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {resource.link}
              </a>
            </div>
          ))
        ) : (
          <p>No resources available at the moment.</p>
        )}
      </div>
    </section>
  );
}

export default Resources;
