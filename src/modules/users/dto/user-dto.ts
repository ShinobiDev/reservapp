import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class UserDto {

    @ApiProperty({
        name: 'id',
        required: false,
        description:'Id del usuario',
        type: Number
    })
    @IsOptional()
    @IsNumber()
    @IsPositive()
    id?: number;

    @ApiProperty({
        name: 'name',
        required: true,
        description:'Nombre del usuario',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    name!: string;

    @ApiProperty({
        name: 'documento',
        required: true,
        description:'Documento del usuario',
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    documento?: number;

    @ApiProperty({
        name: 'email',
        required: true,
        description:'Email del usuario',
        type: String
    })
    @IsNotEmpty()
    @IsEmail()
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

    @ApiProperty({
        name: 'delete',
        required: false,
        description:'Campo para validar si el usuario esta eliminado',
        type: String
    })
    @IsBoolean()
    @IsOptional()
    delete?: boolean
}