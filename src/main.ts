import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { useContainer } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000).then(() => {
     Logger.log('Server is running on port 3000');
  });
  app.setGlobalPrefix("api");
  // useContainer(app.select(AppModule), { fallbackOnErrors: true });
}
bootstrap();
