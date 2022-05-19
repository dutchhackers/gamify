import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt } from "class-validator";

export class AssignBadgeDto {
    
    @ApiProperty({
        type: Number
    })
    @IsInt()
    @Type(() => Number)
    badgeId: number;
}