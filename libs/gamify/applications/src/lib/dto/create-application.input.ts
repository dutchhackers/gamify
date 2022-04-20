import { ApplicationType } from '@gamify/core';
import { Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsOptional, IsUrl, IsInt } from 'class-validator';

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

    // Admin user id should not be provided by the client as input value but 
    // should be obtained from current authenticated user.
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    adminUserId: number;
}