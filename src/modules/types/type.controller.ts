import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TypeService } from './type.service';
import { TypeDto } from './dto/type-dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1/types')
@ApiTags('types')
export class TypeController {
    constructor(private typeService: TypeService){}


    @Post()
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({
        description: 'Creación de un tipo',
    })
    @ApiBody({
        description: 'Crear un tipo mediando un TypeDto',
        type: TypeDto,
        examples: {
            ejemplo1:{
                value: {
                    "name": "Activo"
                }                
            }
        }
    })
    @ApiResponse({
        status: 200,
        description: 'El tipo se creo con exito'
    })
    createStatus(@Body() type: TypeDto){
        return this.typeService.createType(type);
    }

    @Get('/:id')
    @UseGuards(AuthGuard('jwt'))
    getType(@Param('id') id: number){
        return this.typeService.findOneType(id);
    }

    @Get()
    getAllType(){
        return this.typeService.findAllType();
    }

    @Put()
    @ApiOperation({
        description: 'Edición de un tipo',
    })
    @ApiBody({
        description: 'Editar un tipo mediando un TypeDto',
        type: TypeDto,
        examples: {
            ejemplo1:{
                value: {
                    "id": 1,
                    "name": "Cedula de Ciudadania",
                }                
            }
        }
    })
    @ApiResponse({
        status: 200,
        description: 'El tipo se creo con exito'
    })
    updateType(@Body() type: TypeDto){
        return this.typeService.updateType(type);
    }
}
