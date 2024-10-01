import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function GalleryWithTab() {
  const data = [
    {
      label: "Galaxy",
      value: "Galaxy",
      images: [
        {
          imageLink: "https://res.cloudinary.com/dxxk7c6rj/image/upload/v1727783229/image1.jpg",
        },
        {
          imageLink: "https://res.cloudinary.com/dxxk7c6rj/image/upload/v1727783229/image2.jpg",
        },
        {
          imageLink: "https://res.cloudinary.com/dxxk7c6rj/image/upload/v1727783229/image3.jpg",
        },
        {
          imageLink: "https://res.cloudinary.com/dxxk7c6rj/image/upload/v1727783229/image4.jpg",
        },
        {
          imageLink: "https://res.cloudinary.com/dxxk7c6rj/image/upload/v1727783229/image5.jpg",
        },
        {
          imageLink: "https://res.cloudinary.com/dxxk7c6rj/image/upload/v1727783229/image6.jpg",
        },
      ],
    },
    {
      label: "planet",
      value: "planet",
      images: [
        {
          imageLink: "https://res.cloudinary.com/dxxk7c6rj/image/upload/v1727783229/image7.jpg",
        },
        {
          imageLink: "https://res.cloudinary.com/dxxk7c6rj/image/upload/v1727783229/image8.jpg",
        },
        {
          imageLink: "https://res.cloudinary.com/dxxk7c6rj/image/upload/v1727783229/image9.jpg",
        },
        {
          imageLink: "https://res.cloudinary.com/dxxk7c6rj/image/upload/v1727783229/image10.jpg",
        },
        {
          imageLink: "https://res.cloudinary.com/dxxk7c6rj/image/upload/v1727783229/image11.jpg",
        },
        {
          imageLink: "https://res.cloudinary.com/dxxk7c6rj/image/upload/v1727783229/image12.jpg",
        },
      ],
    },
    {
      label: "universe",
      value: "universe",
      images: [
        {
          imageLink: "https://res.cloudinary.com/dxxk7c6rj/image/upload/v1727783229/image13.jpg",
        },
        {
          imageLink: "https://res.cloudinary.com/dxxk7c6rj/image/upload/v1727783229/image14.jpg",
        },
        {
          imageLink: "https://res.cloudinary.com/dxxk7c6rj/image/upload/v1727783229/image15.jpg",
        },
        {
          imageLink: "https://res.cloudinary.com/dxxk7c6rj/image/upload/v1727783229/image16.jpg",
        },
        {
          imageLink: "https://res.cloudinary.com/dxxk7c6rj/image/upload/v1727783229/image17.jpg",
        },
        {
          imageLink: "https://res.cloudinary.com/dxxk7c6rj/image/upload/v1727783229/image18.jpg",
        },
      ],
    }
  ];

  return (
    <Tabs value="Galaxy" className="p-3">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="grid grid-cols-1 gap-4 ">
        {data.map(({ value, images }) => (
          <TabPanel
            className="grid grid-cols-2 gap-4 md:grid-cols-3"
            key={value}
            value={value}
          >
            {images?.map(({ imageLink }, index) => (
              <div key={index}>
                <img
                  className="h-80 w-full max-w-full rounded-lg object-cover object-center"
                  src={imageLink}
                  alt="image-photo"
                />
              </div>
            ))}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
