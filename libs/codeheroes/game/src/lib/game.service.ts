import { DataService } from '@codeheroes/data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {

  constructor(private readonly data: DataService) {}

  findMany() {
    throw new Error('Method not implemented.');
  }

  async findOne(id: string) {
    const snapshot = await this.data.collection('games').doc(id).get();
    if(!snapshot.exists) {
      return;
    }

    const data = snapshot.data() || {};
    return {
      ...data,
      id: 1,
      createdAt: data.createdAt,
    } ;
  }
}
