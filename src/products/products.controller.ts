import { Controller, Get, Post, Request, Query, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsEntity } from '../entities/products.entity';

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
    // Post请求-post带参数
    @Post('/addProducts2')
    addProducts2(@Body() body): any{
        let id = body.id
        return this.productsService.addProducts2(id)
    }
    @Get('/getProductsById')
    // Get请求-@Request()装饰器
    // getProductsById(@Request() req):any{
    //     let id:number = parseInt(req.query.id)
    //     return this.productsService.getProductsById(id)
    // }
    // Get请求-@Query()装饰器
    getProductsById(@Query() query):any{
        let id:number = parseInt(query.id)
        return this.productsService.getProductsById(id)
    }
    // Get请求-@Request()装饰器-动态参数id
    @Get('/getProductsByIdRouter/:id')
    getProductsByIdRouter(@Request() req):any{
        console.log()
        let id:number = parseInt(req.params.id)
        return this.productsService.getProductsByIdRouter(id)
    }
    // Get请求-@Param()装饰器-动态参数id，name
    @Get('/getProductsByIdRouter/:id/:name')
    getProductsByIdRouter2(@Param() Params):any{
        console.log()
        let id:number = parseInt(Params.id)
        let name:string = Params.name
        return this.productsService.getProductsByIdRouter2(id, name)
    }
    // 通过数据库查询产品list
    @Get('list')
    findAll(): Promise<ProductsEntity[]> {
        return this.productsService.findAll();
    }
}

