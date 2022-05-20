import { BadgeTier } from "../enums";

export interface IUserBadge {
    id: number;
    badgeId: number;
    userId: number;
    earnedAt: Date;

    badge?: {
        name: string;
        tier: BadgeTier;
        applicationId: number;
    }
}