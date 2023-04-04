import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    // this.productsService = new ProductsService() 等价于 constructor 方式
    constructor(private productsService: ProductsService){}
    @Get()
    getProductsList(): any{
        return this.productsService.getProductsList()
    }
}

