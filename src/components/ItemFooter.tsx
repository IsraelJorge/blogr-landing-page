type ItemFooter = {
  title: string;
  ItemsFooter: string[];
};

export function ItemFooter({ title, ItemsFooter }: ItemFooter) {
  return (
    <ul>
      <li className="mb-4 font-semibold">{title}</li>
      {ItemsFooter.map((item) => (
        <li key={item} className="mb-2">
          <a href="#" className="text-neutral-gray_100 hover:underline">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}
