import { Controller, Get, Query } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { GetJobsQueryDto } from './dto/get-jobs-query.dto';
import type { JobsResponse } from './dto/job-response.dto';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  getJobs(@Query() query: GetJobsQueryDto): JobsResponse {
    return this.jobsService.getJobs(query);
  }
}