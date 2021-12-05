import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  ping() {
    return 'pong';
  }

  async findUserByEmail(email: string) {
    return {
      email: email,
      name: 'John Doe',
    }
  }

}
