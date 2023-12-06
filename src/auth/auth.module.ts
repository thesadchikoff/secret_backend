import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {UsersService} from "../users/users.service";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./constants";
import {UsersModule} from "../users/users.module";
import { AuthController } from './auth.controller';
import {PrismaService} from "../prisma/prisma";
import {JwtStrategy} from "./jwt.strategy";

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {
                expiresIn: '60s'
            }
        })
    ],
    providers: [
        AuthService,
        UsersService,
        PrismaService,
        JwtStrategy
    ],
    controllers: [AuthController]
})
export class AuthModule {
}
