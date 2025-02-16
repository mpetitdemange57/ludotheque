/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const globalPrefix = 'api';
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: /http:\/\/localhost:.*/, // Autorise Angular
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization'
  });

  app.setGlobalPrefix(globalPrefix);

  const config = new DocumentBuilder()
      .setTitle('Ludothèque de prêt')
      .setDescription('Description de l\'API de la ludothèque de prêt')
      .setVersion('1.0')
      .addTag('Ludothèque', 'Api')
      .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);


  const port = process.env['PORT'] || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
