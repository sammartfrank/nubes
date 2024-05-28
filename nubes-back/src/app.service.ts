import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUserInfo() {
    return { userInfo: 'User info from request' };
  }
}
