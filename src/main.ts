import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable the CORS middleware in the application to allow requests from other domains
  app.use(cors());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();
