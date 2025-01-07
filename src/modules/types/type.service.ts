import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import { Type } from './entity/type.entity';
import { TypeDto } from './dto/type-dto';


@Injectable()
export class TypeService {

    constructor(
        @InjectRepository(Type)
        private typeRepository: Repository<Type>
    ){}

    async createType(type: TypeDto){
        return await this.typeRepository.save(type);
    }

    async findOneType(id: number){
        return await this.typeRepository.findOne({
            where: { id }
        });
    }

    async findAllType(){
        return await this.typeRepository.find();
    }

    async updateType(type: TypeDto){

        const existType = await this.findOneType(type.id);

        if(!existType){
            throw new ConflictException('El Tipo con el id = ' + type.id + ' no existe');
        }
        return await this.typeRepository.save(type);
    }
}
