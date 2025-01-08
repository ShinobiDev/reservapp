import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class RouteDto {
    @ApiProperty({
        name: 'id',
        required: false,
        description: 'Id de la ruta',
        type: Number
    })
    @IsOptional()
    @IsNumber()
    @IsPositive()
    id?: number;

    @ApiProperty({
        name: 'origin_id',
        required: true,
        description: 'Origen de la ruta',
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    origin_id!: number;

    @ApiProperty({
        name: 'destination_id',
        required: true,
        description: 'Destino de la ruta',
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    destination_id!: number;

    @ApiProperty({
        name: 'date',
        required: true,
        description: 'Fecha de la ruta',
        type: Date
    })
    @IsString()
    @IsNotEmpty()
    date!: any;

    @ApiProperty({
        name: 'hour',  // Cambiar 'hora' a 'hour'
        required: true,
        description: 'Hora de la ruta',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    hour!: string;  // Cambiar a 'hour'

    @ApiProperty({
        name: 'create_user_id',
        required: true,
        description: 'Usuario que creó la ruta',
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    create_user_id?: number;

    @ApiProperty({
        name: 'date_create_user_id',
        required: true,
        description: 'Fecha de creación de la ruta',
        type: Date
    })
    @IsString()
    @IsNotEmpty()
    date_create_user_id?: any;

    @ApiProperty({
        name: 'delete',
        required: false,
        description: 'Campo para validar si la ruta está eliminada',
        type: Boolean
    })
    @IsBoolean()
    @IsOptional()
    delete?: boolean;

    @ApiProperty({
        name: 'delete_user_id',
        required: false,
        description: 'Usuario que eliminó la ruta',
        type: Number
    })
    @IsNumber()
    @IsPositive()
    @IsOptional()
    delete_user_id?: number;

    @ApiProperty({
        name: 'date_delete_user_id',
        required: true,
        description: 'Fecha de eliminación de la ruta',
        type: Date
    })
    @IsString()
    @IsOptional()
    date_delete_user_id?: any;
}