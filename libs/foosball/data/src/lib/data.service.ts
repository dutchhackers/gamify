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

  async createUser({ email, password }: { email: string; password: string }) {
    return this.user.create({
      data: {
        email,
        password,
      },
    })
  }

  async findUserByEmail(email: string) {
    return this.user.findUnique({
      where: {
        email,
      },
    })
  }

  async findUserById(userId: number) {
    return this.user.findUnique({
      where: {
        id: userId,
      },
    })
  }}
