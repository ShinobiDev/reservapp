import { Body, Controller, Get, NotFoundException, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserDto } from './dto/user-dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1/users')
@ApiTags('Usuarios')
export class UserController {
    constructor(private usersService: UserService){}


    @Post()
    @ApiOperation({
        description: 'Creación de un usuario',
    })
    @ApiBody({
        description: 'Crear un usuario mediando un UserDto',
        type: UserDto,
        examples: {
            ejemplo1:{
                value: {
                    "name": "Stalin Chacon",
                    "email": "stalindesarrollador@gmail.com",
                    "documento": 80793167,
                    "user": "stalindev",
                    "pass": "123456",
                    "status_id": 1
                }                
            }
        }
    })
    @ApiResponse({
        status: 200,
        description: 'El usuario se creo con exito'
    })
    @ApiResponse({
        status: 401,
        description: 'Unauthorized'
    })
    @ApiResponse({
        status: 500,
        description: 'Error Server'
    })
    createUser(@Body() user: UserDto){
        return this.usersService.createUser(user);
    }

    @Get('/:email')
    @UseGuards(AuthGuard('jwt'))
    async getUserByEmail(@Param('email') email: string) {
        try {
            const user = await this.usersService.getUserByEmail(email);
            return user; // Devuelve el usuario encontrado
        } catch (error) {
            throw new NotFoundException(`User with email ${email} not found`);
        }
    }

    @Get('/:id')
    @ApiOperation({
        description: 'Obtener un usuario por medio de su id',
    })
    @ApiParam({
        name: 'id',
        description: 'Id del usuario',
        required: true,
        type: Number        
    })
    @ApiResponse({
        status: 200,
        description: 'Se obtiene el usuario con exito'
    })
    @ApiResponse({
        status: 401,
        description: 'Unauthrized'
    })
    @UseGuards(AuthGuard('jwt'))
    getUser(@Param('id') id: number){
        return this.usersService.findOneUser(id);
    }

    @Get()
    @ApiOperation({
        description: 'Obtener todos los usuarios',
    })
    @ApiResponse({
        status: 200,
        description: 'Se obtienen los usuarios con exito'
    })
    @ApiResponse({
        status: 401,
        description: 'Unauthrized'
    })
    @UseGuards(AuthGuard('jwt'))
    getAllUser(){
        return this.usersService.findAllUsers();
    }

    @Put()
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({
        description: 'Edición de un usuario',
    })
    @ApiBody({
        description: 'Editar un usuario mediando un UserDto',
        type: UserDto,
        examples: {
            ejemplo1:{
                value: {
                    "id": 1,
                    "name": "Stalin Chacon",
                    "email": "stalindesarrollador@gmail.com",
                    "documento": 80793167,
                    "user": "stalindev",
                    "pass": "123456",
                    "status_id": 1
                }                
            }
        }
    })
    @ApiResponse({
        status: 200,
        description: 'El usuario se creo con exito'
    })
    @ApiResponse({
        status: 401,
        description: 'Unauthrized'
    })
    updateUser(@Body() user: UserDto){
        return this.usersService.updateUser(user);
    }

    
}
