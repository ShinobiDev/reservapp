import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CityDto {

    @ApiProperty({
        name: 'id',
        required: false,
        description:'Id del ciudad',
        type: Number
    })
    @IsOptional()
    @IsNumber()
    @IsPositive()
    id?: number;

    @ApiProperty({
        name: 'name',
        required: true,
        description:'Nombre del ciudad',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    name!: string;
    
    @ApiProperty({
        name: 'delete',
        required: false,
        description:'Campo para validar si el ciudad esta eliminado',
        type: Boolean
    })
    @IsBoolean()
    @IsOptional()
    delete?: boolean
}