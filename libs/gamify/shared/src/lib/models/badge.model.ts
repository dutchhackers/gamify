import { BadgeTier } from "../enums";
import { IBadge } from "../interfaces/badge.interface";

export class Badge implements IBadge {
    id: number;
    createdAt: Date;
    name: string;
    applicationId: number;
    iconPath?: string;
    tier: BadgeTier;
    repeatedlyObtainable: boolean;
    totalScore?: number;
}