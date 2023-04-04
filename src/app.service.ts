// 服务文件，提供的服务文件，业务逻辑编写在这里
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Snow!';
  }
  getName(): string {
    return 'SNOW!';
  }
}
