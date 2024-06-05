import { NestFactory } from '@nestjs/core';
import { CachingModule } from './caching.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(CachingModule);

  const config = new DocumentBuilder()
    .setTitle('Cache API')
    .setDescription('The Cache API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
