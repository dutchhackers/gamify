/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import { FirebaseAuthGuard, RolesGuard } from '@gamify/auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));
  app.enableCors();

  const authGuard = app.get(FirebaseAuthGuard);
  const rolesGuard = app.get(RolesGuard);
  app.useGlobalGuards(authGuard, rolesGuard);

  const port = config.get<number>('port');

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Gamify API')
    .setDescription('Gamify API description')
    .setVersion('1.0')
    .addTag('gamify')
    .build();
  const swaggerDoc = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, swaggerDoc);


  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
