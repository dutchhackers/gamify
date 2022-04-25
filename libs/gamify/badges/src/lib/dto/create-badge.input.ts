import { BadgeTier } from "@gamify/core";
import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsOptional, IsPositive, IsUrl } from "class-validator";
import { Type } from "class-transformer";

export class CreateBadgeInput {

    @IsNotEmpty()
    name: string;

    @IsInt()
    @Type(() => Number)
    applicationId: number;

    @IsOptional()
    @IsUrl() // TODO should be uploadable image
    iconPath: string;

    @IsEnum(BadgeTier)
    tier: BadgeTier;

    @IsBoolean()
    @Type(() => Boolean)
    repeatedlyObtainable: boolean;

    @IsOptional()
    @IsInt()
    @IsPositive()
    @Type(() => Number)
    totalScore: number;
}