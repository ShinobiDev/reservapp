import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/users/user.module';
import { StatusModule } from './modules/status/status.module';
import { TypeModule } from './modules/types/type.module';
import { CityModule } from './modules/cities/city.module';
import { RouteModule } from './modules/routes/route.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategyService } from './modules/auth/strategy/jwt-strategy/jwt-strategy.service';
import configurationAuth from './configuration/configuration-auth';
import { LoggerModule } from './modules/logger/logger.module';

@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({
      load: [configurationAuth],
      envFilePath: `./env/${process.env.NODE_ENV}.env`,
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'reservapp',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    UserModule,
    StatusModule,
    TypeModule,
    CityModule,
    RouteModule,
    AuthModule
  ],
  controllers: [],
  providers: [JwtStrategyService],
})
export class AppModule {}
