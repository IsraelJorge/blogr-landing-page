import Logo from "../assets/logo.svg";
import { ItemFooter } from "./ItemFooter";

export function Footer() {
  const itemProduct = [
    "Overview",
    "Pricing",
    "Marketplace",
    "Features",
    "Integrations",
  ];
  const itemCompany = ["About", "Team", "Blog", "Careers"];
  const itemConnect = ["Contact", "Newsletter", "LinkedIn"];

  return (
    <footer className="bg-neutral-gray_800 flex items-center justify-center py-11 text-white rounded-tr-[100px] font-ubunto">
      <div className="w-[80%] flex">
        <img src={Logo} alt="Logo" className="w-[140px] h-full" />

        <div className="flex flex-1 justify-around">
          <ItemFooter title="Product" ItemsFooter={itemProduct} />
          <ItemFooter title="Company" ItemsFooter={itemCompany} />
          <ItemFooter title="Connect" ItemsFooter={itemConnect} />
        </div>
      </div>
    </footer>
  );
}
