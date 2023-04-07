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
    addProducts(){
        return {
            code: 200,
            data: ['huawei', 'changcheng', 'biyadi'],
            msg: '增加产品成功'
        }
    }
    addProducts2(id: any){
        console.log(id)
        let resJson:any = {
            code: 200,
            data: ['huawei', 'changcheng', 'biyadi'],
            msg: '增加产品成功'
        }
        switch (id) {
            case 1:
                resJson.data = ['huawei']
            break;
            case 2:
                resJson.data = ['changcheng']
            break;
            case 3:
                resJson.data = ['biyadi']
            break;
        }
        return resJson
    }
    getProductsById(id:number){
        let resJson:any = {}
        switch (id) {
            case 1:
                resJson = {id:1, name: 'huawei', type: 'shouji'}
            break;
            case 2:
                resJson = {id:2, name: 'changcheng', type: 'qiche'}
            break;
            case 3:
                resJson = {id:3, name: 'biyadi', type: 'qiche'}
            break;
        }
        return resJson;
    }
    getProductsByIdRouter(id:number){
        let resJson:any = {}
        switch (id) {
            case 1:
                resJson = {id:1, name: 'huawei', type: 'shouji'}
            break;
            case 2:
                resJson = {id:2, name: 'changcheng', type: 'qiche'}
            break;
            case 3:
                resJson = {id:3, name: 'biyadi', type: 'qiche'}
            break;
        }
        return resJson;
    }
    getProductsByIdRouter2(id:number, name:string = "huawei"){
        let resJson:any = {}
        switch (id) {
            case 1:
                resJson = {id:1, name: name, type: 'shouji'}
            break;
            case 2:
                resJson = {id:2, name: name, type: 'qiche'}
            break;
            case 3:
                resJson = {id:3, name: name, type: 'qiche'}
            break;
        }
        return resJson;
    }
}
