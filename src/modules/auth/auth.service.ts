import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { AuthCredentialDto } from './dto/auth-credential-dto';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './dto/jwt-payload';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ){}

    async validateUser(userCredential: AuthCredentialDto){
        
        const user = await this.userService.getUserByEmail(userCredential.email);

        if(user){
            
            const passOk = await bcrypt.compare(userCredential.pass, user.pass);
            
            if(passOk){
                return user;
            }
        }
        return null;
    }

    async login(authCredential: AuthCredentialDto){
        const user = await this.validateUser(authCredential);
        if(!user){
            throw new UnauthorizedException('Credenciales Invalidas');
        }

        const payload: JwtPayload = {
            email: user.email
        }

        return {
            accessToken: this.jwtService.sign(payload)
        }
    }
    

}
