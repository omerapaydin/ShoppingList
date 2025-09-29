import Item from "./Item";

export default function ListItems({
  items,
  onDeleteItem,
  onUpdateItem,
  filterButton,
}) {
  return (
    <ul className="shopping-list list-unstyled">
      {items.length > 0 ? (
        items.map((i) => (
          <Item
            key={i.id}
            urun={i}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
            filterButton={filterButton}
          />
        ))
      ) : (
        <li className="text-muted">Henüz ürün yok.</li>
      )}
    </ul>
  );
}
