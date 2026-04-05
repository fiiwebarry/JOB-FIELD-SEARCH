import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); // ✅ allow frontend requests
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(3000, '0.0.0.0'); // ✅ listen on all network interfaces
  console.log('Backend running at http://localhost:3000');
}
bootstrap();