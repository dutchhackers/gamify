import { DataService } from '@gamify/data';
import { Injectable } from '@nestjs/common';
import { CreateApplicationInput } from './dto/create-application.input';

@Injectable()
export class ApplicationsService {

    constructor(private readonly data: DataService) {}

    findMany() {
        return this.data.application.findMany();
    }

    findOne(id: number) {
        return this.data.application.findUnique({ where: { id }});
    }

    create(createApplicationInput: CreateApplicationInput) {
        return this.data.application.create({
            data: createApplicationInput
        })
    }

}
