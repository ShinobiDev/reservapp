import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import { Route } from './entity/route.entity';
import { RouteDto } from './dto/route-dto';


@Injectable()
export class RouteService {

    constructor(
        @InjectRepository(Route)
        private routeRepository: Repository<Route>
    ){}

    async createRoute(reoute: RouteDto){
        return await this.routeRepository.save(reoute);
    }

    async findOneRoute(id: number){
        return await this.routeRepository.findOne({
            where: { id }
        });
    }

    async findAllRoute(){
        return await this.routeRepository.find();
    }

    async updateRoute(route: RouteDto){

        const existRoute = await this.findOneRoute(route.id);

        if(!existRoute){
            throw new ConflictException('El Origen con el id = ' + route.id + ' no existe');
        }
        return await this.routeRepository.save(route);
    }
}
