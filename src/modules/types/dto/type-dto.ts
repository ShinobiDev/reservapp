import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class TypeDto {

    @ApiProperty({
        name: 'id',
        required: false,
        description:'Id del tipo',
        type: Number
    })
    @IsOptional()
    @IsNumber()
    @IsPositive()
    id?: number;

    @ApiProperty({
        name: 'name',
        required: true,
        description:'Nombre del tipo',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    name!: string;
    
    @ApiProperty({
        name: 'delete',
        required: false,
        description:'Campo para validar si el tipo esta eliminado',
        type: String
    })
    @IsBoolean()
    @IsOptional()
    delete?: boolean
}