import { ApiProperty } from "@nestjs/swagger";
import { ApplicationType } from "../enums";
import { IApplication } from "../interfaces";

export class Application implements IApplication {
    @ApiProperty()
    id: number;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;
    
    @ApiProperty({ enum: ApplicationType })
    applicationType: ApplicationType;
    
    @ApiProperty()
    ownerUserId: number;
    
    @ApiProperty()
    externalApplicationUrl: string;
}