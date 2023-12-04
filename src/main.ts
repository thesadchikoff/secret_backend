import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {Logger} from "nestjs-pino";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false, bufferLogs: true });
  app.enableCors({
    credentials: true, origin: true
  })
  app.useLogger(app.get(Logger))
  const config = new DocumentBuilder()
      .setTitle("Backend documentation")
      .setDescription("The first write notes to application")
      .setVersion("1.0")
      .addTag("api")
      .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  await app.listen(3000);
}
bootstrap();
