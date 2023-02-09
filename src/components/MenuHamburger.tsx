import { Menu, Transition, Disclosure } from "@headlessui/react";
import { useState } from "react";
import { ItemMenuHamburger } from "./ItemMenuHamburger";

export function MenuHamburger() {
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
    <div className="md:flex lg:flex items-center hidden ">
      <Menu as="div" className="relative">
        <div>
          <Menu.Button className="group">
            <div
              className="
      w-[40px]

      before:content-['']
      before:bg-white
      before:block
      before:h-[5px]
      before:rounded-[3px]
      before:my-[7px]
      before:transition-[0.5s]

     after:content-['']
     after:bg-white
     after:block
     after:h-[5px]
     after:rounded-[3px]
     after:my-[7px]
     after:transition-[0.5s]

     group-data-[headlessui-state=open]:before:translate-y-[12px]
     group-data-[headlessui-state=open]:before:rotate-[135deg]

     group-data-[headlessui-state=open]:after:-translate-y-[12px]
     group-data-[headlessui-state=open]:after:-rotate-[135deg]
      "
            >
              <div
                className="   
                content-['']
                bg-white
                block
                h-[5px]
                rounded-[3px]
                my-[7px]
                transition-[0.5s]
                group-data-[headlessui-state=open]:scale-0
            "
              />
            </div>
          </Menu.Button>
        </div>

        <Transition.Root
          enter="transition-all ease-in-out duration-700"
          enterFrom="opacity-0 h-0 "
          enterTo="opacity-100 h-full"
          leave="transition-all ease-in-out duration-300"
          leaveFrom="opacity-100 h-full "
          leaveTo="opacity-0 h-0 "
        >
          <Menu.Items className="absolute right-0 w-[calc(100vw-80px)]  bg-white rounded-md font-medium py-6 px-3 text-neutral-gray_800 shadow-2xl">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <ItemMenuHamburger title="Product" items={itemsDropdownProduct} />
              <ItemMenuHamburger title="Company" items={itemsDropdownCompany} />
              <ItemMenuHamburger title="Connect" items={itemsDropdownConnect} />

              <Menu.Item
                as="div"
                className="w-full flex flex-col items-center justify-center gap-2 font-ubunto font-semibold border-t border-neutral-gray_100 pt-6 "
              >
                <button className="w-[120px] font-medium px-7 py-2 rounded-full border border-transparent hover:border-white transition-colors focus:outline-none focus:ring-2 focus:ring-gradient-red_100 focus:ring-offset-2 focus:ring-offset-gradient-red_500">
                  Login
                </button>
                <button
                  className="w-[120px] bg-primary-red_400  text-white font-medium px-7 py-2 rounded-full 
          hover:text-neutral-white hover:bg-red-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gradient-red_100 focus:ring-offset-2 focus:ring-offset-gradient-red_500
        "
                >
                  Sing Up
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition.Root>
      </Menu>
    </div>
  );
}
