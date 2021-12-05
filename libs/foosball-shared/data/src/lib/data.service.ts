import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  ping() {
    return 'pong';
  }
}
