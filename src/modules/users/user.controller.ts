import { Body, Controller, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserDto } from './dto/user-dto';

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
    createUser(@Body() user: UserDto){
        return this.usersService.createUser(user);
    }

    @Get('/:email')
    async getUserByEmail(@Param('email') email: string) {
        try {
            const user = await this.usersService.getUserByEmail(email);
            return user; // Devuelve el usuario encontrado
        } catch (error) {
            throw new NotFoundException(`User with email ${email} not found`);
        }
    }

    @Get('/:id')
    getUser(@Param('id') id: number){
        return this.usersService.findOneUser(id);
    }

    @Get()
    getAllUser(){
        return this.usersService.findAllUsers();
    }

    @Put()
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
    updateUser(@Body() user: UserDto){
        return this.usersService.updateUser(user);
    }

    
}
