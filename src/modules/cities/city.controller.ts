import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CityService } from './city.service';
import { CityDto } from './dto/city-dto';

@Controller('api/v1/cities')
@ApiTags('City')
export class CityController {
    constructor(private cityService: CityService){}


    @Post()
    @ApiOperation({
        description: 'Creación de un origen',
    })
    @ApiBody({
        description: 'Crear un origen mediando un OriginDto',
        type: CityDto,
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
        description: 'El origen se creo con exito'
    })
    createOrigin(@Body() origin: CityDto){
        return this.cityService.createOrigin(origin);
    }

    @Get('/:id')
    getOrigin(@Param('id') id: number){
        return this.cityService.findOneOrigin(id);
    }

    @Get()
    getAllOrigin(){
        return this.cityService.findAllOrigin();
    }

    @Put()
    @ApiOperation({
        description: 'Edición de un origen',
    })
    @ApiBody({
        description: 'Editar un origen mediando un CityDto',
        type: CityDto,
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
        description: 'El origen se creo con exito'
    })
    updateOrigin(@Body() origin: CityDto){
        return this.cityService.updateOrigin(origin);
    }
}
