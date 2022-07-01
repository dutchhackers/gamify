import { BadgeTier } from "../enums";
import { IFavoriteBadge } from "../interfaces";

export class FavoriteBadge implements IFavoriteBadge {
    userId: number;
    badgeId: number;
    priority: number;

    badge?: {
        name: string;
        tier: BadgeTier;
    }
}