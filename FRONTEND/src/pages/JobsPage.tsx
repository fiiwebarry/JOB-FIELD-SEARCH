import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchJobs, type Job } from "../api/jobsApi";
import FiltersSidebar from "../components/FilterSiderbar";
import JobsList from "../components/JobList";
import Pagination from "../components/Pagination";

export default function JobsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [meta, setMeta] = useState({
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 1,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const params = {
    category: searchParams.get("category") || "",
    type: searchParams.get("type") || "",
    page: Number(searchParams.get("page") || 1),
    limit: 10,
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchJobs(params)
      .then((res) => {
        setJobs(res.data);
        setMeta(res.meta);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [searchParams.toString()]);

  const updateFilters = (newFilters: Record<string, string>) => {
    const updated = {
      ...Object.fromEntries(searchParams),
      ...newFilters,
      page: "1",
    };
    setSearchParams(updated);
  };

  const changePage = (page: number) =>
    setSearchParams({
      ...Object.fromEntries(searchParams),
      page: page.toString(),
    });

  return (
    <section className="  max-w-7xl mx-auto">
      <p className="text-bold text-black">JOB LIST</p>
      <div className="grid grid-flow-cols md:grid-cols-4 gap-4">
        <FiltersSidebar params={params} onChange={updateFilters} />
        <div className="grid grid-flow-cols">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && jobs.length === 0 && <p>No jobs found.</p>}
          <JobsList jobs={jobs} />
          <Pagination meta={meta} onChangePage={changePage} />
        </div>
      </div>
    </section>
  );
}
