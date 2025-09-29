import Item from "./Item";

export default function ListItems({ items, onDeleteItem }) {
  return (
    <ul className="shopping-list list-unstyled">
      {items.length > 0 ? (
        items.map((i) => (
          <Item key={i.id} urun={i} onDeleteItem={onDeleteItem} />
        ))
      ) : (
        <li className="text-muted">Henüz ürün yok.</li>
      )}
    </ul>
  );
}
