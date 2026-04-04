import type { Job } from "../api/jobsApi";

interface Props {
  jobs: Job[];
}
export default function JobsList({ jobs }: Props) {
  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.id}>
          {job.title} — {job.category} — {job.type}
        </li>
      ))}
    </ul>
  );
}
