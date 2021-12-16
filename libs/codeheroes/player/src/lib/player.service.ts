import { DataService } from '@codeheroes/data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayerService {


  constructor(private readonly data: DataService) {}

  public findMany() {
    Promise.resolve()
    // return this.data;
  }

  public findOne(key: string) {
    return {
      id: 1,
      name: 'John Doe',
      email: key,
    }

  }


}
