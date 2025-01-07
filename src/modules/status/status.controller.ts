import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StatusService } from './status.service';
import { StatusDto } from './dto/status-dto';

@Controller('api/v1/status')
@ApiTags('Estados')
export class StatusController {
    constructor(private statusService: StatusService){}


    @Post()
    @ApiOperation({
        description: 'Creación de un estado',
    })
    @ApiBody({
        description: 'Crear un estado mediando un StatusDto',
        type: StatusDto,
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
        description: 'El estado se creo con exito'
    })
    createStatus(@Body() status: StatusDto){
        return this.statusService.createStatus(status);
    }

    @Get('/:id')
    getStatus(@Param('id') id: number){
        return this.statusService.findOneStatus(id);
    }

    @Get()
    getAllStatus(){
        return this.statusService.findAllStatus();
    }

    @Put()
    @ApiOperation({
        description: 'Edición de un estado',
    })
    @ApiBody({
        description: 'Editar un estado mediando un StatusDto',
        type: StatusDto,
        examples: {
            ejemplo1:{
                value: {
                    "id": 1,
                    "name": "Activo",
                }                
            }
        }
    })
    @ApiResponse({
        status: 200,
        description: 'El estado se creo con exito'
    })
    updateStatus(@Body() status: StatusDto){
        return this.statusService.updateStatus(status);
    }
}
