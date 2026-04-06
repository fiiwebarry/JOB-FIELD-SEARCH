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
            <p className="text-indigo-800">
              {" "}
              <span className="text-red-500">Role: </span>
              {job.title}
            </p>
            <p className="text-indigo-800">
              <span className="text-red-500">Category: </span> {job.category}
            </p>
            <p className="text-indigo-800">
              <span className="text-red-500">Employment Type: </span> {job.type}
            </p>
            <p className="text-indigo-800">
              <span className="text-red-500">Experience: </span>{" "}
              {job.experience}
            </p>
            <p className="text-indigo-800">
              <span className="text-red-500">Work Mode: </span> {job.workMode}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
