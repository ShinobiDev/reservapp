import { Module } from '@nestjs/common';
import { TypeController } from './type.controller';
import { TypeService } from './type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from './entity/type.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([
      Type
    ])
  ],
  controllers: [TypeController],
  providers: [TypeService]
})
export class TypeModule {}
