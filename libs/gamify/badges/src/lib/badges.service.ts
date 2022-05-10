import { DataService } from '@gamify/data';
import { Injectable } from '@nestjs/common';
import { CreateBadgeInput } from './dto/create-badge.input';
import { UpdateBadgeInput } from './dto/update-badge.input';
import { BadgeModel } from './models';

@Injectable()
export class BadgesService {

    constructor(private readonly data: DataService) {}

    findMany(): Promise<BadgeModel[]> {
        return this.data.badge.findMany();
    }

    findOne(id: number): Promise<BadgeModel> {
        return this.data.badge.findUnique({ where: { id }});
    }

    create(createBadgeInput: CreateBadgeInput): Promise<BadgeModel> {
        return this.data.badge.create({
            data: createBadgeInput
        });
    }

    update(id: number, updateBadgeInput: UpdateBadgeInput): Promise<BadgeModel> {
        return this.data.badge.update({
            where: { id },
            data: updateBadgeInput
        })
    }

    remove(id: number): Promise<BadgeModel> {
        return this.data.badge.delete({ where: { id }});
    }
}