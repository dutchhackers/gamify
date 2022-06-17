import { Type } from "class-transformer";
import { IsInt } from "class-validator";

export class AssignBadgeDto {
    
    @IsInt()
    @Type(() => Number)
    badgeId: number;
}