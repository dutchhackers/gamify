import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config'
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DataService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super();
  }

  public async onModuleDestroy() {
    await this.$disconnect();
  }

  public async onModuleInit() {
    await this.$connect();

    // More specific init needed?
    Logger.log('Prisma client connected'); // Example of logging
  }

  async findUserByEmail(email: string) {
    return {
      email: email,
      name: 'John Doe',
    };
  }
}
