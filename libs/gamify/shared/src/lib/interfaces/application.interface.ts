import { ApplicationType } from "../enums/application-type.enum";

export interface IApplication {
    id: number;
    createdAt: Date;
    name: string;
    description: string;
    applicationType: ApplicationType;
    ownerUserId: number;
    externalApplicationUrl: string;
}