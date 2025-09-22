export default function Item({ urun }) {
  return (
    <li className="d-flex justify-content-between align-items-center border-bottom py-2">
      <span>{urun.name}</span>
      {urun.completed ? (
        <span className="badge bg-success">Tamamlandı</span>
      ) : (
        <span className="badge bg-warning text-dark">Eksik</span>
      )}
    </li>
  );
}
