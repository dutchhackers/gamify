import { Injectable } from '@nestjs/common';
import { DataService } from '../data.service';

@Injectable()
export class UsersService {

    constructor(private readonly data: DataService) {}

    findOne(id: number) {
        return this.data.user.findUnique({
            where: { id }
        });
    }

    assignBadgeToUser(userId: number, badgeId: number) {
        return this.data.userBadge.create({
            data: {
                userId,
                badgeId
            }
        });
    }

    getUserBadges(userId: number) {
        return this.data.userBadge.findMany({
            where: {
                userId
            }
        });
    }
}
