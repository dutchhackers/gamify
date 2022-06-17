import { ApplicationType } from "../enums";
import { IApplication } from "../interfaces";

export class Application implements IApplication {
    id: number;
    createdAt: Date;
    name: string;
    description: string;
    applicationType: ApplicationType;
    ownerUserId: number;
    externalApplicationUrl: string;
}