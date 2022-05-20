import { ApplicationType } from '@gamify/shared';
import { IsEnum, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateApplicationInput {

    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        required: false
    })
    @IsOptional()
    description: string;

    @ApiProperty({
        enum: ApplicationType
    })
    @IsEnum(ApplicationType)
    applicationType: string;

    @ApiProperty({
        required: false
    })
    @IsOptional()
    @IsUrl()
    externalApplicationUrl: string;

    ownerUserId: number;
}