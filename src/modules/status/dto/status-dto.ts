import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class StatusDto {

    @ApiProperty({
        name: 'id',
        required: false,
        description:'Id del estado',
        type: Number
    })
    @IsOptional()
    @IsNumber()
    @IsPositive()
    id?: number;

    @ApiProperty({
        name: 'name',
        required: true,
        description:'Nombre del estado',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    name!: string;
    
    @ApiProperty({
        name: 'delete',
        required: false,
        description:'Campo para validar si el estado esta eliminado',
        type: String
    })
    @IsBoolean()
    @IsOptional()
    delete?: boolean
}