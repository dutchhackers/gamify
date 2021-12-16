import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class DataService /** extends Firestore */ implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // super();
  }

  public async onModuleDestroy() {
    // await this.$disconnect();
  }

  public async onModuleInit() {
    // await this.$connect();

    // More specific init needed?
    Logger.log('Firestore client connected'); // Example of logging
  }

}
