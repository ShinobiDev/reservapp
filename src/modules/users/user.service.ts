import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserDto } from './dto/user-dto';
import { LoggerService } from './../logger/logger.service'


@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private loggerService: LoggerService
    ){
        this.populateUsers();
    }

    async populateUsers() {
        const users: UserDto[] = [
            {
                name: "User Test",
                documento: 80793167,
                email: "test@test.com",
                pass: '123456',
                status_id: 1
            }
        ];

        for (const user of users) {
            
            await this.createUser(user);
            
        }
    }

    async createUser(userDto: UserDto) {
        
        const user = new User();
        Object.assign(user, userDto);

        return await this.userRepository.save(user);
    }

    async findOneUser(id: number){
        return await this.userRepository.findOne({
            where: { id }
        });
    }

    async findAllUsers(){
        return await this.userRepository.find();
    }

    async updateUser(user: UserDto){

        const existUser = await this.findOneUser(user.id);

        if(!existUser){
            throw new ConflictException('El Usuario con el id = ' + user.id + ' no existe');
        }
        return await this.userRepository.save(user);
    }

    async getUserByEmail(email: string){
        if (!email) {
            throw new Error("Email cannot be empty.");
        }
    
        try {
            const user = await this.userRepository.findOne({
                where: { email }
            });
        
            this.loggerService.log(JSON.stringify(user));
            if (!user) {
                throw new Error("User not found.");
            }    
            return user; 
        } catch (error) {
            console.error("Error fetching user by email:", error);
            throw new Error("Error obteniendo el usuario.");
        }
    }
}
