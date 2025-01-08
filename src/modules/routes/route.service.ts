import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import { Route } from './entity/route.entity';
import { RouteDto } from './dto/route-dto';
import { UserService } from '../users/user.service';
import { CityService } from '../cities/city.service';


@Injectable()
export class RouteService {

    constructor(
        @InjectRepository(Route)
        private routeRepository: Repository<Route>,
        private userService: UserService,
        private cityService: CityService
    ){}

    async createRoute(reoute: RouteDto, userId: any){

        const currentDate = new Date();

        const newRoute = this.routeRepository.create({
            origin_id: reoute.origin_id,           
            destination_id: reoute.destination_id, 
            date: reoute.date,                     
            hour: reoute.hour,                     
            create_user_id: userId,
            date_create_user_id: currentDate                 
        });

        const route = await this.routeRepository.save(newRoute);
        if(!route){
            throw new ConflictException('Error al momento de crear la ruta');
        }
        const origin = await this.cityService.findOneOrigin(route.origin_id);
        const destination = await this.cityService.findOneOrigin(route.destination_id);
        const user = await this.userService.getUserById(userId);
        const response = {
            status_code: 200,
            ruta: route.id,
            origin: origin.name,
            destination: destination.name,
            date: route.date,
            hour: route.hour,
            user: user.name,
        };

        return response;
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
            throw new ConflictException('La ruta con el id = ' + route.id + ' no existe');
        }
        return await this.routeRepository.save(route);
    }

    async softDeleteRoute(id: number, userId: any){
        const routeExist = await this.findOneRoute(id);
        if (!routeExist) {
            throw new ConflictException('La ruta con el id = ' + id + ' no existe');
        }
        if (routeExist.delete) {
            throw new ConflictException('La ruta ya fue borrada');
        }
        
        const currentDate = new Date();

        await this.routeRepository.update(
            { id },
            {
                delete: true,
                delete_user_id: userId,
                date_delete_user_id: currentDate
            }
        );

        return {
            message: 'Ruta borrada correctamente',
            id: id,
            date_deleted: currentDate,
            deleted_by: userId
        };
    }

    async findAllRoutesDelete(){
        const routes = await this.routeRepository.find({
            where: { delete: true }
        })

        if (routes) {
            const response = {
                message: 'Rutas borradas correctamente',
                deletedRoutes: []  // Inicializa un arreglo para almacenar las rutas borradas
            };
        
            for (let i = 0; i < routes.length; i++) {
                const route = routes[i];

                const origin = await this.cityService.findOneOrigin(route.origin_id);
                const destination = await this.cityService.findOneOrigin(route.destination_id);
                const user = await this.userService.getUserById(route.delete_user_id);

                const routeDelete = {
                    route: route.id,
                    origin: origin.name,
                    destination: destination.name,
                    date: route.date,
                    hour: route.hour,
                    user: user.name,
                    date_delete: route.date_delete_user_id
                };
        
                // Agregar routeDelete al arreglo deletedRoutes
                response.deletedRoutes.push(routeDelete);
            }
        
            return response; // Devuelve el objeto response que ahora incluye todas las rutas borradas
        }
    }
}
