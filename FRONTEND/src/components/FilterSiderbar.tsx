interface Props {
  params: { category: string; type: string };
  onChange: (filters: Record<string, string>) => void;
}

export default function FiltersSidebar({ params, onChange }: Props) {
  return (
    <section className="w-full mt-4 shadow-md rounded-xl border border-gray-300 p-4 mb-4 bg-white">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Category */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Tech Job</label>
          <select
            value={params.category}
            onChange={(e) => onChange({ category: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="">All</option>
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
          </select>
        </div>

        {/* Type */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Employment Type</label>
          <select
            value={params.type}
            onChange={(e) => onChange({ type: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="">All</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        {/* Work Mode */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Work Mode</label>
          <select className="border border-gray-300 rounded-md px-3 py-2">
            <option>All</option>
            <option>Onsite</option>
            <option>Remote</option>
            <option>Hybrid</option>
          </select>
        </div>

        {/* Experience */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Experience</label>
          <select className="border border-gray-300 rounded-md px-3 py-2">
            <option>All</option>
            <option>Internship</option>
            <option>Entry Level</option>
            <option>Mid-Level</option>
            <option>Senior</option>
          </select>
        </div>
      </div>
    </section>
  );
}
