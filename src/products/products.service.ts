import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    getProductsList(){
        return {
            code: 0,
            data: ['huawei', 'changcheng', 'biyadi'],
            msg: '请求产品列表成功'
        }
    }
}
