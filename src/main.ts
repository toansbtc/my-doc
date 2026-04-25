import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CustomGuard } from './myGuard/customGuard';

async function bootstrap() {

  const cookieParser = require('cookie-parser');

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  app.use(cookieParser());
  app.useGlobalGuards(app.get(CustomGuard));
  await app.listen(process.env.PORT ?? 3001);

}
bootstrap();
