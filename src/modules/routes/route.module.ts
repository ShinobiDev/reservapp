import { Module } from '@nestjs/common';
import { RouteController } from './route.controller';
import { RouteService } from './route.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Route } from './entity/route.entity';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../users/user.module'; 
import { CityModule } from '../cities/city.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([
      Route
    ]),
    UserModule,
    CityModule
  ],
  controllers: [RouteController],
  providers: [RouteService]
})
export class RouteModule {}
