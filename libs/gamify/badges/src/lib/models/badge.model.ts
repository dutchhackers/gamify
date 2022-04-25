import { BadgeTier } from "@gamify/core";

export class BadgeModel {
    id: number;
    createdAt: Date;
    applicationId: number;
    iconPath?: string;
    tier: string|BadgeTier;
    repeatedlyObtainable: boolean;
    totalScore?: number;
}