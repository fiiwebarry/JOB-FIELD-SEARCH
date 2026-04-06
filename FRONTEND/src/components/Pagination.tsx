interface Props {
  meta: { page: number; totalPages: number };
  onChangePage: (page: number) => void;
}

export default function Pagination({ meta, onChangePage }: Props) {
  const pages = Array.from({ length: meta.totalPages }, (_, i) => i + 1);
  return (
    <div className="flex justify-center gap-2 mt-4">
      {pages.map((p) => (
        <button
          key={p}
          disabled={p === meta.page}
          className={`px-3 py-1 rounded ${
            p === meta.page ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => onChangePage(p)}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
