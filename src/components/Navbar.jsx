import { Navbar } from "flowbite-react";
export default function Component() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          James Webb Telescope
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/gallery">Gallery</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
