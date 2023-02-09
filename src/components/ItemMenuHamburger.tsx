import { Menu, Transition, Disclosure } from "@headlessui/react";
import { ReactElement } from "react";
import Arrow from "../assets/icon-arrow-dark.svg";

const itemsDropdownConnect = ["Contact", "NewsLetter", "Linkedin"];

type ItemMenuHamburgerProps = {
  title: string;
  items: string[];
};

type FadeInProps = {
  delay: string;
  children: ReactElement;
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

      <Transition.Root
        enter="ease-out duration-300"
        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enterTo="opacity-100 translate-y-0 sm:scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        className="w-full flex justify-center"
      >
        <Disclosure.Panel className="flex flex-col gap-3 py-6 mt-3 w-[90%] bg-neutral-gray_100 rounded-md">
          {items.map((item, index) => (
            <FadeIn delay={`delay-[${index * 300}ms]`}>
              <Menu.Item
                as="a"
                className="font-ubunto text-neutral-gray_200 cursor-pointer"
              >
                {item}
              </Menu.Item>
            </FadeIn>
          ))}
        </Disclosure.Panel>
      </Transition.Root>
    </Disclosure>
  );
}

const FadeIn = ({ delay, children }: FadeInProps) => (
  <Transition.Child
    enter={`transition-all ease-in-out duration-700 ${delay}`}
    enterFrom="opacity-0 translate-y-6"
    enterTo="opacity-100 translate-y-0"
    leave="transition-all ease-in-out duration-300"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    {children}
  </Transition.Child>
);
