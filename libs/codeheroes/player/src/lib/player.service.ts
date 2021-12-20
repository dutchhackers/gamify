import { DataService } from '@codeheroes/data';
import { Injectable } from '@nestjs/common';
import { Player } from './models';

@Injectable()
export class PlayerService {

  constructor(private readonly data: DataService) {}

  public findMany() {
    Promise.resolve()
    // return this.data;
  }

  public async findOne(key: string) {
    const snapshot = await this.data.collection('users').doc(key).get();
    if(!snapshot.exists) {
      return;
    }

    const data = snapshot.data() || {};
    return {
      ...data,
      id: 1,
      nickname: data.displayName,
      avatar: data.photoUrl,
    } ;
  }


}
