import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class RouteDto {

    @ApiProperty({
        name: 'id',
        required: false,
        description:'Id de la ruta',
        type: Number
    })
    @IsOptional()
    @IsNumber()
    @IsPositive()
    id?: number;

    @ApiProperty({
        name: 'origin_id',
        required: true,
        description:'Origen de la ruta',
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    origin_id!: number;

    @ApiProperty({
        name: 'destination_id',
        required: true,
        description:'Origen de la ruta',
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    destination_id!: number;

    @ApiProperty({
        name: 'date',
        required: true,
        description:'Fecha de la ruta',
        type: Date
    })
    @IsString()
    @IsNotEmpty()
    date!: any;

    @ApiProperty({
        name: 'hora',
        required: true,
        description:'Fecha de la ruta',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    hora!: string;

    @ApiProperty({
        name: 'create_user_id',
        required: true,
        description:'Usuario que creo la ruta',
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    create_user_id!: number;

    @ApiProperty({
        name: 'date_create_user_id',
        required: true,
        description:'Fecha de la ruta',
        type: Date
    })
    @IsString()
    @IsNotEmpty()
    date_create_user_id?: any;
    
    @ApiProperty({
        name: 'delete',
        required: false,
        description:'Campo para validar si el ciudad esta eliminado',
        type: Boolean
    })
    @IsBoolean()
    @IsOptional()
    delete?: boolean

    @ApiProperty({
        name: 'delete_user_id',
        required: true,
        description:'usuario que elimino la ruta',
        type: Number
    })
    @IsNumber()
    @IsPositive()
    @IsOptional()
    delete_user_id?: number;

    @ApiProperty({
        name: 'date_delete_user_id',
        required: true,
        description:'Fecha de la eliminación de la ruta',
        type: Date
    })
    @IsString()
    @IsOptional()
    date_delete_user_id?: any;
}