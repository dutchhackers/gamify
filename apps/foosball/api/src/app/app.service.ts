import { DataService } from '@foosball/data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly dataService: DataService) {}

  getData(): { message: string } {
    return { message: 'Welcome to foosball-api!' };
  }

  getTestDataPing() {
    return this.dataService.ping();
  }

  getUser( email: string) {
    return this.dataService.findUserByEmail( email );
  }
}
