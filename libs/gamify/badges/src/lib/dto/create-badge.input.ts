import { BadgeTier } from "@gamify/shared";
import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsOptional, IsPositive, IsUrl } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class CreateBadgeInput {

    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        type: Number
    })
    @IsInt()
    @Type(() => Number)
    applicationId: number;

    @ApiProperty({
        required: false
    })
    @IsOptional()
    @IsUrl() // TODO should be uploadable image
    iconPath: string;

    @ApiProperty({
        enum: BadgeTier
    })
    @IsEnum(BadgeTier)
    tier: BadgeTier;

    @ApiProperty({
        type: Boolean
    })
    @IsBoolean()
    @Type(() => Boolean)
    repeatedlyObtainable: boolean;

    @ApiProperty({
        type: Number,
        required: false
    })
    @IsOptional()
    @IsInt()
    @IsPositive()
    @Type(() => Number)
    totalScore: number;
}