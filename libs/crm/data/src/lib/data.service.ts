import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class DataService implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // super();
  }

  public async onModuleDestroy() {
    // await this.$disconnect();
  }

  public async onModuleInit() {
    // More specific init needed?
    Logger.log('DataService client connected'); // Example of logging
  }
}
