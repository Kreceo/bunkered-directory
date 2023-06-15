import { Navbar, Button } from "flowbite-react";

export default function NavbarBlock() {
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href="https://flowbite.com/">
        <img
          alt="Flowbite Logo"
          className="mr-3 h-6 sm:h-9"
          src="https://flowbite.com/docs/images/logo.svg"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="bg-[#000000]">
          Get started
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="/"
        >
          Home
        </Navbar.Link>
        <Navbar.Link href="/hub">
          Hub
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}