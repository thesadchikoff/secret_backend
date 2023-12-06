
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import { jwtConstants } from './constants';
import {AuthDto} from "./dto/auth.dto";
import {AuthService} from "./auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }
    async validate(dto: AuthDto): Promise<any> {
        const user = await this.authService.validateUser(dto);
        if (!user) {
            console.log("Toast")
            throw new UnauthorizedException();
        }
        return user;
    }
}