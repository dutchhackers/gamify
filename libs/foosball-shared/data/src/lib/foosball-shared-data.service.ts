import { Injectable } from '@nestjs/common';

@Injectable()
export class FoosballSharedDataService {
  ping() {
    return 'pong';
  }
}
