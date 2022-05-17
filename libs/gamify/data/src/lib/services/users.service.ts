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

    findUserBadge(userBadgeId: number) {
        return this.data.userBadge.findUnique({
            where: {
                id: userBadgeId
            }
        });
    }

    findUserBadges(userId: number, applicationId?: number) {
        const select = {
            id: true,
            badgeId: true,
            userId: true,
            earnedAt: true,
            badge: {
                select: {
                    name: true,
                    tier: true,
                    applicationId: true
                }
            }
        };
        if (applicationId) {
            return this.data.userBadge.findMany({
                where: {
                    userId,
                    badge: { applicationId }
                },
                select
            });
        }
        return this.data.userBadge.findMany({
            where: {
                userId
            },
            select
        });
    }

    removeUserBadge(userBadgeId: number) {
        return this.data.userBadge.delete({
            where: {
                id: userBadgeId
            }
        });
    }
}