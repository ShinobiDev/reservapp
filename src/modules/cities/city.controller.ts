import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CityService } from './city.service';
import { CityDto } from './dto/city-dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1/cities')
@ApiTags('City')
export class CityController {
    constructor(private cityService: CityService){}


    @Post()
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({
        description: 'Creación de un origen',
    })
    @ApiBody({
        description: 'Crear un origen mediando un OriginDto',
        type: CityDto,
        examples: {
            ejemplo1:{
                value: {
                    "name": "Bogotá"
                }                
            }
        }
    })
    @ApiResponse({
        status: 200,
        description: 'La ciudad se creo con exito'
    })
    @ApiResponse({
        status: 401,
        description: 'Unauthorized'
    })
    @ApiResponse({
        status: 500,
        description: 'Error Server'
    })
    createOrigin(@Body() origin: CityDto){
        return this.cityService.createOrigin(origin);
    }

    @Get('/:id')
    @UseGuards(AuthGuard('jwt'))
    getOrigin(@Param('id') id: number){
        return this.cityService.findOneOrigin(id);
    }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    getAllOrigin(){
        return this.cityService.findAllOrigin();
    }

    @Put()
    @UseGuards(AuthGuard('jwt'))
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
                    "name": "Medellín",
                }                
            }
        }
    })
    @ApiResponse({
        status: 200,
        description: 'La ciudad se actualizó con exito'
    })
    @ApiResponse({
        status: 401,
        description: 'Unauthorized'
    })
    @ApiResponse({
        status: 500,
        description: 'Error Server'
    })
    updateOrigin(@Body() origin: CityDto){
        return this.cityService.updateOrigin(origin);
    }
}
