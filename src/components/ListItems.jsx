import Item from "./Item";

export default function ListItems({ urunler }) {
  return (
    <ul className="shopping-list list-unstyled">
      {urunler.length > 0 ? (
        urunler.map((i, index) => <Item key={index} urun={i} />)
      ) : (
        <NoItems />
      )}
    </ul>
  );
}
