import { Body, Controller, Get, Param, Post, Put, UseGuards, Request, Delete  } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RouteService } from './route.service';
import { RouteDto } from './dto/route-dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1/routes')
@ApiTags('Route')
export class RouteController {
    constructor(private routeService: RouteService){}


    @Post()
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({
        description: 'Creación de un ruta',
    })
    @ApiBody({
        description: 'Crear un ruta mediando un OriginDto',
        type: RouteDto,
        examples: {
            ejemplo1:{
                value: {
                    "origin_id": 2,
                    "destination_id": 1,
                    "date": "2024-02-10",
                    "hora": "08:50",
                }                
            }
        }
    })
    @ApiResponse({
        status: 200,
        description: 'El ruta se creo con exito'
    })
    createRoute(@Body() route: RouteDto, @Request() req ){
        return this.routeService.createRoute(route, req.user.id);
    }

    @Get('/deleted')
    @UseGuards(AuthGuard('jwt'))
    getRoutesDeleted(){
        return this.routeService.findAllRoutesDelete();
    }

    @Get('/:id')
    @UseGuards(AuthGuard('jwt'))
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
    @UseGuards(AuthGuard('jwt'))
    getAllRoute(){
        return this.routeService.findAllRoute();
    }

    @Put()
    @UseGuards(AuthGuard('jwt'))
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

    @Delete('/:id')
    @UseGuards(AuthGuard('jwt'))
    deleteRoute(@Param('id') id: number, @Request() req){
        return this.routeService.softDeleteRoute(id, req.user.id);
    }
    
}
