interface Props {
  params: { category: string; type: string };
  onChange: (filters: Record<string, string>) => void;
}

export default function FiltersSidebar({ params, onChange }: Props) {
  return (
    <div className="w-64 p-4 border-r">
      <div>
        <label>Category</label>
        <select
          value={params.category}
          onChange={(e) => onChange({ category: e.target.value })}
        >
          <option value="">All</option>
          <option value="Engineering">Engineering</option>
          <option value="Design">Design</option>
        </select>
      </div>
      <div>
        <label>Type</label>
        <select
          value={params.type}
          onChange={(e) => onChange({ type: e.target.value })}
        >
          <option value="">All</option>
          <option value="Full-time">Full-time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>
    </div>
  );
}
