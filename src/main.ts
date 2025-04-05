import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { App1Module } from './app1.module';

async function bootstrap() {
  const app = await NestFactory.create(App1Module);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();


