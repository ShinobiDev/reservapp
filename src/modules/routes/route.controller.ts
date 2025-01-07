import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RouteService } from './route.service';
import { RouteDto } from './dto/route-dto';

@Controller('api/v1/routes')
@ApiTags('Route')
export class RouteController {
    constructor(private routeService: RouteService){}


    @Post()
    @ApiOperation({
        description: 'Creación de un ruta',
    })
    @ApiBody({
        description: 'Crear un ruta mediando un OriginDto',
        type: RouteDto,
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
        description: 'El ruta se creo con exito'
    })
    createRoute(@Body() route: RouteDto){
        return this.routeService.createRoute(route);
    }

    @Get('/:id')
    @ApiOperation({
        description: 'Obtener una ruta',
    })
    @ApiParam({
        name: 'id',
        description: 'Id de la ruta',
        required: true,
        type: Number        
    })
    getRoute(@Param('id') id: number){
        return this.routeService.findOneRoute(id);
    }

    @Get()
    getAllRoute(){
        return this.routeService.findAllRoute();
    }

    @Put()
    @ApiOperation({
        description: 'Edición de un ruta',
    })
    @ApiBody({
        description: 'Editar un ruta mediando un RouteDto',
        type: RouteDto,
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
        description: 'El ruta se creo con exito'
    })
    updateRoute(@Body() route: RouteDto){
        return this.routeService.updateRoute(route);
    }
}
