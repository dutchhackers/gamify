import { ApplicationType } from "../enums/application-type.enum";

export interface IApplication {
    id: number;
    createdAt: Date;
    name: string;
    description: string;
    applicationType: ApplicationType;
    externalApplicationUrl: string;
    overviewPriority?: number;
    overviewImagePath?: string;
    apiKey?: string;
    adminUserId?: number;
    inOverview?: boolean;
    startDate?: Date;
    endDate?: Date;
}