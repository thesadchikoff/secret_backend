import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {User} from "@prisma/client";
import {UsersService} from "../users/users.service";
import {AuthDto} from "./dto/auth.dto";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}
    async validateUser(dto: AuthDto): Promise<any> {
        const user = await this.usersService.findByEmail(dto.email);
        console.log(`Email: ${dto.email}. User: ${user}`)
        if (user && user.password !== dto.password) {
            throw new HttpException("Error Authentication", HttpStatus.BAD_REQUEST)
        }
        const { password, ...result } = user;
        return result;
    }
    async login(user: any) {
        const payload = {username: user.email, id: user.id};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
