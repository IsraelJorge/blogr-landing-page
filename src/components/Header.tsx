import Logo from "../assets/logo.svg";
import { ItemHeader } from "./ItemHeader";

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
    <header className="w-full max-w-[1000px] mx-auto py-10 flex  justify-between relative z-10">
      <div className="flex items-center gap-20">
        <div>
          <img src={Logo} alt="Logo da blorgr" />
        </div>
        <nav className="flex items-center gap-5">
          <ItemHeader title="Product" itemsDropdown={itemsDropdownProduct} />
          <ItemHeader title="Company" itemsDropdown={itemsDropdownCompany} />
          <ItemHeader title="Connect" itemsDropdown={itemsDropdownConnect} />
        </nav>
      </div>

      <div className="font-ubunto flex items-center gap-9 text-neutral-white">
        <button className="font-medium">Login</button>
        <button
          className=" bg-neutral-white text-primary-red_400 font-medium px-7 py-2 rounded-full 
          hover:text-neutral-white hover:bg-red-300 transition-colors
        "
        >
          Sing Up
        </button>
      </div>
    </header>
  );
}
