import { FoosballSharedDataService } from '@foosball/data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly dataService: FoosballSharedDataService) {}

  getData(): { message: string } {
    return { message: 'Welcome to foosball-api!' };
  }

  getTestDataPing() {
    return this.dataService.ping();
  }
}
