import { UserBadge, UserBadgeConverter } from '@gamify/shared';
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

    assignBadgeToUser(userId: number, badgeId: number): Promise<UserBadge> {
        return this.data.userBadge.create({
            data: {
                userId,
                badgeId
            }
        });
    }

    findUserBadge(userBadgeId: number): Promise<UserBadge> {
        return this.data.userBadge.findUnique({
            where: {
                id: userBadgeId
            }
        });
    }

    async findUserBadges(userId: number, applicationId?: number): Promise<UserBadge[]> {
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
            return (await this.data.userBadge.findMany({
                where: {
                    userId,
                    badge: { applicationId }
                },
                select
            })).map(userBadge => UserBadgeConverter.fromPrismaUserBadge(userBadge));
        }
        return (await this.data.userBadge.findMany({
            where: {
                userId
            },
            select
        })).map(userBadge => UserBadgeConverter.fromPrismaUserBadge(userBadge));
    }

    removeUserBadge(userBadgeId: number) {
        return this.data.userBadge.delete({
            where: {
                id: userBadgeId
            }
        });
    }
}
