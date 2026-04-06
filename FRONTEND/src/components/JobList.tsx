import type { Job } from "../api/jobsApi";

interface Props {
  jobs: Job[];
}
export default function JobsList({ jobs }: Props) {
  return (
    <section className="">
      <div className="grid gap-2">
        {jobs.map((job) => (
          <div
            className="shadow-md p-5 rounded-4xl border border-gray-300"
            key={job.id}
          >
            <p> Role:{job.title}</p>
            <p>Category: {job.category}</p>
            <p>Work Mode: {job.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
