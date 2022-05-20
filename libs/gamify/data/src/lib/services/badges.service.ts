import { CreateBadgeInput, UpdateBadgeInput } from '@gamify/badge';
import { DataService } from '../data.service';
import { Injectable } from '@nestjs/common';
import { Badge, BadgeConverter } from '@gamify/shared';

@Injectable()
export class BadgesService {

    constructor(private readonly data: DataService) {}

    async findMany(applicationId?: number): Promise<Badge[]> {
        if (applicationId) {
            return (await this.data.badge.findMany({
                where: { applicationId }
            })).map(badge => BadgeConverter.fromPrismaBadge(badge));
        }
        return (await this.data.badge.findMany()).map(badge => BadgeConverter.fromPrismaBadge(badge));
    }

    async findOne(id: number): Promise<Badge> {
        return BadgeConverter.fromPrismaBadge(await this.data.badge.findUnique({ where: { id }}));
    }

    async create(createBadgeInput: CreateBadgeInput): Promise<Badge> {
        return BadgeConverter.fromPrismaBadge(await this.data.badge.create({
            data: createBadgeInput
        }));
    }

    async update(id: number, updateBadgeInput: UpdateBadgeInput): Promise<Badge> {
        return BadgeConverter.fromPrismaBadge(await this.data.badge.update({
            where: { id },
            data: updateBadgeInput
        }));
    }

    async remove(id: number): Promise<Badge> {
        return BadgeConverter.fromPrismaBadge(await this.data.badge.delete({ 
            where: { id }
        }));
    }
}
