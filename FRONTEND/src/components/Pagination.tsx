interface Props {
  meta: { page: number; totalPages: number };
  onChangePage: (page: number) => void;
}

export default function Pagination({ meta, onChangePage }: Props) {
  const pages = Array.from({ length: meta.totalPages }, (_, i) => i + 1);
  return (
    <div className="grid justify-items-center mt-4">
      {pages.map((p) => (
        <button
          key={p}
          disabled={p === meta.page}
          onClick={() => onChangePage(p)}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
