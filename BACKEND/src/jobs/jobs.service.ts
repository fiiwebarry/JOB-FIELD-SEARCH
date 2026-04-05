import { Injectable } from '@nestjs/common';
import { Job, JobsResponse } from './dto/job-response.dto';
import { GetJobsQueryDto } from './dto/get-jobs-query.dto';

@Injectable()
export class JobsService {
  private jobs: Job[] = [
    { id: '1', title: 'Frontend Engineer', category: 'Engineering', type: 'Full-time' },
    { id: '2', title: 'UI Designer', category: 'Design', type: 'Contract' },
    { id: '3', title: 'Backend Developer', category: 'Engineering', type: 'Full-time' },
    { id: '4', title: 'Product Designer', category: 'Design', type: 'Full-time' },
    { id: '5', title: 'DevOps Engineer', category: 'Engineering', type: 'Contract' },
    // add more as needed
  ];

  getJobs(query: GetJobsQueryDto): JobsResponse {
    const { page = 1, limit = 10, category, type } = query;

    let filtered = this.jobs;
    if (category) filtered = filtered.filter(j => j.category.toLowerCase() === category.toLowerCase());
    if (type) filtered = filtered.filter(j => j.type.toLowerCase() === type.toLowerCase());

    const total = filtered.length;
    const totalPages = Math.ceil(total / limit);
    const start = (page - 1) * limit;
    const data = filtered.slice(start, start + limit);

    return { data, meta: { total, page, limit, totalPages } };
  }
}