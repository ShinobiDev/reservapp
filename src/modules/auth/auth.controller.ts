import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential-dto';

@Controller('api/v1/auth')
export class AuthController {
    constructor(private authService: AuthService){} 

    @Post('/login')
    login(@Body() authCredential: AuthCredentialDto){
        return this.authService.login(authCredential);
    }
    
}
