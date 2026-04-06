interface Props {
  params: {
    category: string;
    type: string;
    workMode: string;
    experience: string;
  };
  onChange: (filters: Record<string, string>) => void;
}

export default function FiltersSidebar({ params, onChange }: Props) {
  return (
    <section className="w-full mt-4 shadow-md rounded-xl border border-gray-300 p-4 mb-4 bg-white">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Category */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Category</label>
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
          <select
            value={params.workMode}
            onChange={(e) => onChange({ workMode: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="">All</option>
            <option value="Onsite">Onsite</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        {/* Experience */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Experience</label>
          <select
            value={params.experience}
            onChange={(e) => onChange({ experience: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="">All</option>
            <option value="Internship">Internship</option>
            <option value="Entry-level">Entry Level</option>
            <option value="Mid-level">Mid-Level</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
      </div>
    </section>
  );
}
