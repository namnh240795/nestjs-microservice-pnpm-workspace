import { NestFactory } from '@nestjs/core';
import { BackendModule } from './backend.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(BackendModule);

  const config = new DocumentBuilder()
    .setTitle('Backend API')
    .setDescription('The Backend API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
