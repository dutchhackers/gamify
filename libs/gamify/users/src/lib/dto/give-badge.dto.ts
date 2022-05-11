import { Type } from "class-transformer";
import { IsInt } from "class-validator";

export class GiveBadgeDto {
    
    @IsInt()
    @Type(() => Number)
    badgeId: number;
}