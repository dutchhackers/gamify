import { ApiProperty } from "@nestjs/swagger";
import { BadgeTier } from "../enums";
import { IUserBadge } from "../interfaces";

export class UserBadge implements IUserBadge {

    @ApiProperty()
    id: number;

    @ApiProperty()
    badgeId: number;

    @ApiProperty()
    userId: number;

    @ApiProperty()
    earnedAt: Date;

    @ApiProperty()
    badge?: {
        name: string; 
        tier: BadgeTier;
        applicationId: number;
    };
}