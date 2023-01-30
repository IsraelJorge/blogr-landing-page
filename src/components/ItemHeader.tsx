import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Arrow from "../assets/icon-arrow-light.svg";

type ItemHeaderProps = {
  title: string;
  itemsDropdown: string[];
};

export function ItemHeader({ title, itemsDropdown }: ItemHeaderProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center gap-2 cursor-pointer text-neutral-white font-ubunto font-semibold rounded-full p-1 hover:underline group text-base focus:outline-none focus:ring-2 focus:ring-gradient-red_100 focus:ring-offset-2 focus:ring-offset-gradient-red_500">
        <p>{title}</p>
        <img
          src={Arrow}
          alt="Arrow icon"
          className="group-data-[state=open]:rotate-180 transition-all"
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-neutral-white px-1 py-5 mt-4 rounded-md transition-all">
          {itemsDropdown.map((item) => (
            <DropdownMenu.Item
              className="hover:outline-none"
              key={item}
              onSelect={() => alert(item)}
            >
              <a
                href="#"
                className="block py-1 px-6 font-ubunto hover:font-medium cursor-pointer "
              >
                {item}
              </a>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
