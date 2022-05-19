import { PrismaUserBadge } from "@gamify/data";
import { plainToClass } from "class-transformer";
import { IUserBadge } from "../interfaces";
import { UserBadge } from "../models/user-badge.model";

export class UserBadgeConverter {
    static fromPrismaUserBadge(prismaUserBadge: PrismaUserBadge): IUserBadge {
        return plainToClass(UserBadge, prismaUserBadge);
    }
}