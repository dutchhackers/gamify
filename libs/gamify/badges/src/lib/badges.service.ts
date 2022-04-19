import { DataService } from '@gamify/data';
import { Injectable } from '@nestjs/common';
import { CreateBadgeInput } from './dto/create-badge.input';

@Injectable()
export class BadgesService {

    constructor(private readonly data: DataService) {}

    findMany() {
        return this.data.badge.findMany();
    }

    create(createBadgeInput: CreateBadgeInput) {
        return this.data.badge.create({
            data: createBadgeInput
        });
    }
}
