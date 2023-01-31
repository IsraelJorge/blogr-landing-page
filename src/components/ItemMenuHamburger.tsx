import { Menu, Transition, Disclosure } from "@headlessui/react";
import Arrow from "../assets/icon-arrow-dark.svg";

const itemsDropdownConnect = ["Contact", "NewsLetter", "Linkedin"];

type ItemMenuHamburgerProps = {
  title: string;
  items: string[];
};

export function ItemMenuHamburger({ title, items }: ItemMenuHamburgerProps) {
  return (
    <Disclosure
      as="div"
      className="w-full font-ubunto flex flex-col items-center justify-center group"
    >
      <Disclosure.Button className="flex items-center justify-center text-center">
        {title}
        <img
          src={Arrow}
          alt="Arrow"
          className="ml-2 group-data-[headlessui-state=open]:rotate-180 transition-all"
        />
      </Disclosure.Button>

      <Transition
        enter="transition-all duration-75"
        enterFrom="h-0"
        enterTo="h-full"
        leave="transition-all duration-150"
        leaveFrom="h-full"
        leaveTo="h-0"
        className="w-full flex justify-center"
      >
        <Disclosure.Panel className="flex flex-col gap-3 py-6 mt-3 w-[90%] bg-neutral-gray_100 rounded-md">
          {items.map((item) => (
            <Menu.Item
              as="a"
              className="font-ubunto text-neutral-gray_200 cursor-pointer"
            >
              {item}
            </Menu.Item>
          ))}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
}
