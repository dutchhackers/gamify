import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated';

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

        Logger.log('Gamify prisma client connected!');
    }

    // async createUser({ email, }: { email: string; }) {
    //     return this.user.create({
    //       data: {
    //         email,
    //       },
    //     });
    // }
}
