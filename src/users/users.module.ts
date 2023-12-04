import {Logger, Module} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {PrismaService} from "../prisma/prisma";
import {LoggerModule} from "nestjs-pino";

@Module({
  imports: [
      LoggerModule.forRoot()
  ],
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersModule {}
