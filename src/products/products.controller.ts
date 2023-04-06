import { Controller, Get, Post, Request, Query, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    // this.productsService = new ProductsService() 等价于 constructor 方式
    constructor(private productsService: ProductsService){}
    @Get('/getProductsList')
    getProductsList(): any{
        return this.productsService.getProductsList()
    }
    @Post('/addProducts')
    addProducts(): any{
        return this.productsService.addProducts()
    }
    // @Post('/addProducts2')
    // addProducts2(@Request() req): any{
    //     return this.productsService.addProducts2()
    // }
    // post带参数
    @Post('/addProducts2')
    addProducts2(@Body() body): any{
        let id = body.id
        return this.productsService.addProducts2(id)
    }
    @Get('/getProductsById')
    // @Request()装饰器
    // getProductsById(@Request() req):any{
    //     let id:number = parseInt(req.query.id)
    //     return this.productsService.getProductsById(id)
    // }
    // @Query()装饰器
    getProductsById(@Query() query):any{
        let id:number = parseInt(query.id)
        return this.productsService.getProductsById(id)
    }
}

