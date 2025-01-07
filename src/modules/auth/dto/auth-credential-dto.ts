import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthCredentialDto{
    @ApiProperty({
        name: 'email',
        required: true,
        description:'Email del usuario para loguin',
        type: String
    })
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @ApiProperty({
        name: 'pass',
        required: true,
        description:'Password para el login del usuario',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    pass!: string;

}