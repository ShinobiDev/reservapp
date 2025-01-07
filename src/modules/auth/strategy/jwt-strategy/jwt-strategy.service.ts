import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from '../../dto/jwt-payload'
import { UserService } from 'src/modules/users/user.service';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy){

    constructor(
        private configService:ConfigService,
        private userService:UserService
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get('auth.secretKey')
        })
    }

    async validate(payload: JwtPayload) {

        const userExist = await this.userService.getUserByEmail(payload.email)
        if (!userExist) {
            throw new UnauthorizedException();
        }

        userExist.pass = undefined;
        return userExist;

    }
}
