import { PrismaApplicationUser } from "@gamify/data";
import { plainToClass } from "class-transformer";
import { IApplicationUser } from "../interfaces";
import { ApplicationUser } from "../models/application-user.model";

export class ApplicationUserConverter {
    static fromPrismaApplicationUser(prismaApplicationUser: PrismaApplicationUser): IApplicationUser {
        return plainToClass(ApplicationUser, prismaApplicationUser);
    }
}