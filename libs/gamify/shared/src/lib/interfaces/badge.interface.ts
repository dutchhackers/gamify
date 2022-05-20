import { BadgeTier } from "../enums";

export interface IBadge {
    id: number;
    createdAt: Date;
    name: string;
    applicationId: number;
    iconPath?: string;
    tier: BadgeTier;
    repeatedlyObtainable: boolean;
    totalScore?: number;
}