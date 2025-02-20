import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ❌ Remueve propiedades no definidas en el DTO
      forbidNonWhitelisted: true, // 🚫 Lanza error si se envían propiedades no permitidas
      transform: true, // 🔄 Transforma payloads al tipo esperado en el DTO
    }),
  );
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;

  await app.listen(port);
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
}
bootstrap();
