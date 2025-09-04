import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; // 🔹 Swagger import

async function bootstrap() {
  const PORT = Number(process.env.PORT);
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    }),
  );

  // 🔹 Swagger sozlash
  const config = new DocumentBuilder()
    .setTitle('Codni API')
    .setDescription('Codni server API hujjatlari')
    .setVersion('1.0')
    .addBearerAuth() // agar JWT auth ishlatilsa
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document); // Swagger endpoint: /api-docs

  await app.listen(PORT, () => console.log('server running on port', PORT));
}
bootstrap();
