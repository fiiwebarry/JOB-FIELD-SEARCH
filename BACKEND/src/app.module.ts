import { Module } from '@nestjs/common';
import { AppController } from './jobs/jobs.controller';
import { AppService } from './jobs/jobs.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
