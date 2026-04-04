export interface Job {
  id: string;
  title: string;
  category: string;
  type: string;
}

export interface JobsResponse {
  data: Job[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export async function fetchJobs(params: Record<string, string | number>) {
  const query = new URLSearchParams(params as Record<string, string>).toString();
  const res = await fetch(`http://localhost:3000/jobs?${query}`);
  if (!res.ok) throw new Error('Failed to fetch jobs');
  return res.json() as Promise<JobsResponse>;
}