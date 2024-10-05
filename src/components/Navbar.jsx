import { Navbar } from "flowbite-react";
export default function Component() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img
          src="http://192.168.1.2:8000/media/JWST icon in circle.svg"
          className="mr-3 h-6 sm:h-11"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-3xl font-serif dark:text-white">
          Beyond The Stars
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-lg">
          Home
        </Navbar.Link>
        <Navbar.Link href="/discoveries" className="text-lg">
          Discoveries
        </Navbar.Link>
        <Navbar.Link href="/gallery" className="text-lg">
          Gallery
        </Navbar.Link>
        <Navbar.Link href="/resources" className="text-lg">
          Resources
        </Navbar.Link>
        <Navbar.Link href="/about" className="text-lg">
          About
        </Navbar.Link>
        <Navbar.Link href="/contact" className="text-lg">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
