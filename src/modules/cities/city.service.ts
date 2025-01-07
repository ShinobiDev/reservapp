import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entity/city.entity';
import { CityDto } from './dto/city-dto';


@Injectable()
export class CityService {

    constructor(
        @InjectRepository(City)
        private cityRepository: Repository<City>
    ){}

    async createOrigin(city: CityDto){
        return await this.cityRepository.save(city);
    }

    async findOneOrigin(id: number){
        return await this.cityRepository.findOne({
            where: { id }
        });
    }

    async findAllOrigin(){
        return await this.cityRepository.find();
    }

    async updateOrigin(city: CityDto){

        const existCity = await this.findOneOrigin(city.id);

        if(!existCity){
            throw new ConflictException('El Origen con el id = ' + city.id + ' no existe');
        }
        return await this.cityRepository.save(city);
    }
}
