import { Module } from '@nestjs/common';
import { AppController } from './jobs.controller';
import { AppService } from './jobs.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
