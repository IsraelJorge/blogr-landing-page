import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Arrow from "../assets/icon-arrow-light.svg";
import { Menu, Transition } from "@headlessui/react";

type ItemHeaderProps = {
  title: string;
  itemsDropdown: string[];
};

export function ItemHeader({ title, itemsDropdown }: ItemHeaderProps) {
  return (
    <div>
      <Menu as="div" className="relative">
        <div>
          <Menu.Button className="text-neutral-white font-ubunto font-semibold rounded-full p-1 hover:underline group text-base flex items-center gap-1 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gradient-red_500">
            {title}
            <img
              src={Arrow}
              alt="Arrow icon"
              className="group-data-[headlessui-state=open]:rotate-180 ml-1 transition-all"
            />
          </Menu.Button>
        </div>

        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute flex flex-col mt-3 py-4 px-1 bg-white rounded-md focus:outline-none shadow-2xl ">
            {itemsDropdown.map((item) => (
              <Menu.Item key={item}>
                {({ active }) => (
                  <a
                    className={`${
                      active
                        ? "bg-primary-red_300 text-white font-semibold"
                        : "text-black"
                    } cursor-pointer px-6 py-1 rounded-sm mb-1`}
                  >
                    {item}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
