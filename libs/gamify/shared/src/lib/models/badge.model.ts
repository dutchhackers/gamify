import { ApiProperty } from "@nestjs/swagger";
import { BadgeTier } from "../enums";
import { IBadge } from "../interfaces/badge.interface";

export class Badge implements IBadge {
    
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    createdAt: Date;
    
    @ApiProperty()
    name: string;
    
    @ApiProperty()
    applicationId: number;
    
    @ApiProperty()
    iconPath?: string;
    
    @ApiProperty()
    tier: BadgeTier;
    
    @ApiProperty()
    repeatedlyObtainable: boolean;
    
    @ApiProperty()
    totalScore?: number;
}