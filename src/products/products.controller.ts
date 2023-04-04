import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    getProductsList(): any{
        return {
            code: 0,
            data: ['huawei', 'changcheng', 'biyadi'],
            msg: '请求产品列表成功'
        }
    }
}

