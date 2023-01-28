import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Arrow from "../assets/icon-arrow-light.svg";

type ItemHeaderProps = {
  title: string;
  itemsDropdown: string[];
};

export function ItemHeader({ title, itemsDropdown }: ItemHeaderProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center gap-2 cursor-pointer text-neutral-white font-ubunto font-semibold hover:underline focus:outline-none group text-base">
        <p>{title}</p>
        <img
          src={Arrow}
          alt="Arrow icon"
          className="group-data-[state=open]:rotate-180 transition-all"
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-neutral-white outline-none py-5 px-6 mt-4 rounded-md transition-all">
          {itemsDropdown.map((item) => (
            <DropdownMenu.Item
              key={item}
              className="py-1 focus:outline-none font-ubunto hover:font-medium cursor-pointer "
              onSelect={() => alert(item)}
            >
              {item}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
