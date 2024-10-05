import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";
import React, { useEffect } from "react";
const tabs = [
  { label: "galaxy", value: "galaxy" },
  { label: "planet", value: "planet" },
  { label: "star", value: "star" },
  { label: "universe", value: "universe" },
];
export default function GalleryWithTab() {
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState();
  const [data, setData] = React.useState([]);

  const handleOpen = (image) => {
    setImage(image);
    setOpen((cur) => !cur);
  };
  const fetchDate = async (type) => {
    const response = await fetch(
      `http://192.168.1.2:8000/api/v1/gallery/?type=${type}`
    );
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    fetchDate("galaxy");
  }, []);
  return (
    <>
      <Tabs value="galaxy" className="p-3">
        <TabsHeader>
          {tabs.map(({ label, value }) => (
            <Tab key={value} value={value} onClick={() => fetchDate(value)}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="grid grid-cols-1 gap-4 ">
          {tabs.map(({ label, value }) => (
            <TabPanel
              className="grid grid-cols-2 gap-4 md:grid-cols-3"
              key={value}
              value={value}
            >
              {data?.map(({ image,name,description }, index) => (
                <div key={index}>
                  <img
                    className="h-80 w-full max-w-full rounded-lg object-cover object-center transform transition-transform duration-300 hover:scale-110"
                    src={image}
                    alt="image-photo"
                    onClick={() => handleOpen({image,name,description})}
                  />
                </div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="justify-center">
          <Typography variant="h5" color="black">
          {image?image['name']:null}
          </Typography>
        </DialogHeader>
        <DialogBody>
          <img
            alt="nature"
            className="h-[20rem] w-full rounded-lg object-cover object-center"
            src={image?image['image']:null}
          />
        </DialogBody>
        <DialogFooter className="justify-between">
          <Typography variant="paragraph" color="black">
          {image?image['description']:null}
          </Typography>
        </DialogFooter>
      </Dialog>
    </>
  );
}
