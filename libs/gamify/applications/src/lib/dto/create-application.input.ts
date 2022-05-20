import { ApplicationType } from '@gamify/shared';
import { IsEnum, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

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

    ownerUserId: number;
}