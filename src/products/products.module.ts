import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from '../entities/products.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProductsEntity])], // 导入并注册实体
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
