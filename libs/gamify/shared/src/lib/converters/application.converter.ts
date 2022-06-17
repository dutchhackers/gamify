import { PrismaApplication } from "@gamify/data";
import { plainToClass } from "class-transformer";
import { IApplication } from "../interfaces";
import { Application } from "../models";

export class ApplicationConverter {
    static fromPrismaApplication(prismaApplication: PrismaApplication): IApplication {
        return plainToClass(Application, prismaApplication);
    }
}