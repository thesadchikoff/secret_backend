import {Logger, MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {PrismaService} from "./prisma/prisma";
import {LoggerModule} from "nestjs-pino";

@Module({
  imports: [UsersModule,
      LoggerModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})

export class AppModule {}
