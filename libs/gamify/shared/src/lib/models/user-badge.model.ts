import { BadgeTier } from "../enums";
import { IUserBadge } from "../interfaces";

export class UserBadge implements IUserBadge {
    id: number;
    badgeId: number;
    userId: number;
    earnedAt: Date;

    badge?: { 
        name: string; 
        tier: BadgeTier;
        applicationId: number;
    };
}