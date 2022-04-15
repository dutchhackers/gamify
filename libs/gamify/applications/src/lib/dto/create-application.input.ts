import { ApplicationType } from '@gamify/core';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsUrl } from 'class-validator';

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
    @IsNumber()
    adminUserId: number;
}