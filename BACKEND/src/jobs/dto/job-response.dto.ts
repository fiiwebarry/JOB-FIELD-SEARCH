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