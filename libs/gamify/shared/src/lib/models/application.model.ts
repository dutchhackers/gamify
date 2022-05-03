import { ApplicationType } from "../enums";
import { IApplication } from "../interfaces";

export class Application implements IApplication {
    id: number;
    createdAt: Date;
    name: string;
    description: string;
    applicationType: ApplicationType;
    externalApplicationUrl: string;
    overviewPriority?: number | undefined;
    overviewImagePath?: string | undefined;
    apiKey?: string | undefined;
    adminUserId?: number | undefined;
    inOverview?: boolean | undefined;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
}