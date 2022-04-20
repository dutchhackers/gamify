import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated';

@Injectable()
export class DataService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

    // private readonly softDeleteEntities: string[] = ['Application', 'Badge'];

    constructor() {
        super();

        // this.setupSoftdeleteMiddleware();
    }

    public async onModuleDestroy() {
        await this.$disconnect();
    }

    public async onModuleInit() {
        await this.$connect();

        Logger.log('Gamify prisma client connected!');
    }

    // private setupSoftdeleteMiddleware() {
    //     /***********************************/
    //     /* SOFT DELETE MIDDLEWARE */
    //     /***********************************/
    //     this.$use(async (params, next) => {
    //         // Check incoming query type
    //         if (this.softDeleteEntities.includes(params.model)) {
    //           if (params.action == 'delete') {
    //             // Delete queries
    //             // Change action to an update
    //             params.action = 'update'
    //             params.args['data'] = { deletedAt: DateTime.now().toString() }
    //           }
    //           if (params.action == 'deleteMany') {
    //             // Delete many queries
    //             params.action = 'updateMany'
    //             if (params.args.data != undefined) {
    //               params.args.data['deletedAt'] = DateTime.now().toString();
    //             } else {
    //               params.args['data'] = { deletedAt: DateTime.now().toString() }
    //             }
    //           }
    //         }
    //         return next(params)
    //       })
    // }
}
