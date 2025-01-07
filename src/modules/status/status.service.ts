import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from './entity/status.entity';
import { StatusDto } from './dto/status-dto';


@Injectable()
export class StatusService {

    constructor(
        @InjectRepository(Status)
        private statusRepository: Repository<Status>
    ){}

    async createStatus(status: StatusDto){
        return await this.statusRepository.save(status);
    }

    async findOneStatus(id: number){
        return await this.statusRepository.findOne({
            where: { id }
        });
    }

    async findAllStatus(){
        return await this.statusRepository.find();
    }

    async updateStatus(status: StatusDto){

        const existStatus = await this.findOneStatus(status.id);

        if(!existStatus){
            throw new ConflictException('El Usuario con el id = ' + status.id + ' no existe');
        }
        return await this.statusRepository.save(status);
    }
}
