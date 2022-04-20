import { ApplicationType } from '@gamify/core';
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';
import { Type } from "class-transformer";

export class CreateApplicationInput {

    @IsNotEmpty()
    name: string;

    @IsOptional()
    description: string;

    @IsEnum(ApplicationType)
    applicationType: string;

    @IsOptional()
    @IsUrl()
    externalApplicationUrl: string;

    // Owner user id should not be provided by the client as input value but 
    // should be obtained from current authenticated user.
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    ownerUserId: number;
}