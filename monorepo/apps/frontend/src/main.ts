import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { FrontendModule } from './frontend.module';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(FrontendModule);

  app.useStaticAssets(join(__dirname, '../../../', 'apps/frontend/src/styles'));
  app.setBaseViewsDir(join(__dirname, '../../../', 'apps/frontend/src/views'));
  hbs.registerPartials(
    join(__dirname, '../../../', 'apps/frontend/src/views/partials'),
  );
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
