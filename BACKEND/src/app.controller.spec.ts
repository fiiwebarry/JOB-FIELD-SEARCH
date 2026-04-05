import { Test, TestingModule } from '@nestjs/testing';
import { JobsController } from './jobs/jobs.controller';
import { JobsService } from './jobs/jobs.service';

describe('JobsController', () => {
  let controller: JobsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobsController],
      providers: [JobsService],
    }).compile();

    controller = module.get<JobsController>(JobsController);
  });

  it('should return jobs list', () => {
    const result = controller.getJobs({ page: 1, limit: 10 });
    expect(result).toHaveProperty('data');
    expect(result).toHaveProperty('meta');
  });
});