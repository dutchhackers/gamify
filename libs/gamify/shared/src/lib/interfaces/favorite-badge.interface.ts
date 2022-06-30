import { BadgeTier } from "../enums";

export interface IFavoriteBadge {
    userId: number;
    badgeId: number;
    priority: number;

    badge?: {
        name: string;
        tier: BadgeTier;
    }
}