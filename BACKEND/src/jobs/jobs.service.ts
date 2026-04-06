import { Injectable } from '@nestjs/common';
import { Job, JobsResponse } from './dto/job-response.dto';
import { GetJobsQueryDto } from './dto/get-jobs-query.dto';

@Injectable()
export class JobsService {
 private jobs: Job[] = [
  { id: '1', title: 'Frontend Engineer', category: 'Engineering', type: 'Full-time', workMode: 'Remote', experience: 'Mid-level' },
  { id: '2', title: 'UI/UX Designer', category: 'Design', type: 'Contract', workMode: 'Hybrid', experience: 'Entry-level' },
  { id: '3', title: 'Backend Developer', category: 'Engineering', type: 'Full-time', workMode: 'Onsite', experience: 'Senior' },
  { id: '4', title: 'Product Designer', category: 'Design', type: 'Full-time', workMode: 'Remote', experience: 'Mid-level' },
  { id: '5', title: 'DevOps Engineer', category: 'Engineering', type: 'Contract', workMode: 'Hybrid', experience: 'Senior' },
  { id: '6', title: 'Full Stack Developer', category: 'Engineering', type: 'Full-time', workMode: 'Remote', experience: 'Mid-level' },
  { id: '7', title: 'Mobile App Developer', category: 'Engineering', type: 'Part-time', workMode: 'Remote', experience: 'Entry-level' },
  { id: '8', title: 'Data Scientist', category: 'Engineering', type: 'Full-time', workMode: 'Onsite', experience: 'Senior' },
  { id: '9', title: 'QA Engineer', category: 'Engineering', type: 'Contract', workMode: 'Hybrid', experience: 'Mid-level' },
  { id: '10', title: 'Graphic Designer', category: 'Design', type: 'Part-time', workMode: 'Remote', experience: 'Entry-level' },
  { id: '11', title: 'Cloud Engineer', category: 'Engineering', type: 'Full-time', workMode: 'Remote', experience: 'Senior' },
  { id: '12', title: 'Cybersecurity Analyst', category: 'Engineering', type: 'Full-time', workMode: 'Hybrid', experience: 'Mid-level' },
];
  getJobs(query: GetJobsQueryDto): JobsResponse {
   const { page = 1, limit = 5, category, type, workMode, experience } = query;

    let filtered = this.jobs;
    if (category) filtered = filtered.filter(j => j.category.toLowerCase() === category.toLowerCase());
    if (type) filtered = filtered.filter(j => j.type.toLowerCase() === type.toLowerCase());
    if (workMode) filtered = filtered.filter(j => j.workMode.toLowerCase() === workMode.toLowerCase());
    if (experience) filtered = filtered.filter(j => j.experience.toLowerCase() === experience.toLowerCase());

    const total = filtered.length;
    const totalPages = Math.ceil(total / limit);
    const start = (page - 1) * limit;
    const data = filtered.slice(start, start + limit);

    return { data, meta: { total, page, limit, totalPages } };
  }
}