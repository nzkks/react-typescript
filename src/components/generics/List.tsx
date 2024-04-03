type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export function List<T>({ items, onClick }: ListProps<T>) {
  return (
    <div>
      <h2>List of Items</h2>
      {items.map((item, index) => (
        <div key={index} onClick={() => onClick(item)}>
          {typeof item === 'object' && item.name ? item.name : item}
        </div>
      ))}
    </div>
  );
}
