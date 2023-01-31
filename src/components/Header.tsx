import Logo from "../assets/logo.svg";
import { ItemHeader } from "./ItemHeader";
import { MenuHamburger } from "./MenuHamburger";

export function Header() {
  const itemsDropdownConnect = ["Contact", "NewsLetter", "Linkedin"];
  const itemsDropdownCompany = ["About", "Team", "Blog", "Careers"];
  const itemsDropdownProduct = [
    "Overview",
    "Pricing",
    "Marketplace",
    "Features",
    "Integrations",
  ];

  return (
    <header className="w-full max-w-[1000px] mx-auto py-10 flex justify-between relative z-10 lg:px-10">
      <div className="flex items-center gap-20">
        <a href="#" className="block">
          <img src={Logo} alt="Logo da blorgr" />
        </a>
        <nav className="flex items-center gap-5 lg:hidden">
          <ItemHeader title="Product" itemsDropdown={itemsDropdownProduct} />
          <ItemHeader title="Company" itemsDropdown={itemsDropdownCompany} />
          <ItemHeader title="Connect" itemsDropdown={itemsDropdownConnect} />
        </nav>
      </div>

      <div className="font-ubunto flex items-center gap-9 text-neutral-white lg:hidden">
        <button className="font-medium px-7 py-2 rounded-full border border-transparent hover:border-white transition-colors focus:outline-none focus:ring-2 focus:ring-gradient-red_100 focus:ring-offset-2 focus:ring-offset-gradient-red_500">
          Login
        </button>
        <button
          className=" bg-neutral-white text-primary-red_400 font-medium px-7 py-2 rounded-full 
          hover:text-neutral-white hover:bg-red-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gradient-red_100 focus:ring-offset-2 focus:ring-offset-gradient-red_500
        "
        >
          Sing Up
        </button>
      </div>

      <MenuHamburger />
    </header>
  );
}
