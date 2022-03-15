import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //pipo kullanımı için eklenmiştir.
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages: true,
  }))
  await app.listen(3000);
}
bootstrap();
