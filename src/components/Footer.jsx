import { Typography } from "@material-tailwind/react";
const links = ["Company", "About Us", "Team", "Products", "Blog", "Pricing"];
const currentYear = new Date().getFullYear();

export function Footer16() {
  return (
    <footer className="px-8 py-20">
      <div className="container mx-auto flex flex-col items-center">
        <Typography
          color="blue-gray"
          className="mt-6 !text-sm !font-normal text-gray-500"
        >
          Copyright &copy; {currentYear} Steller Explorers
        </Typography>
      </div>
    </footer>
  );
}
export default Footer16;