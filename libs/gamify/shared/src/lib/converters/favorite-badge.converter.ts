import { PrismaFavoriteBadge } from "@gamify/data";
import { plainToClass } from "class-transformer";
import { IFavoriteBadge } from "../interfaces";
import { FavoriteBadge } from "../models";

export class FavoriteBadgeConverter {
    static fromPrismaFavoriteBadge(prismaFavoriteBadge: PrismaFavoriteBadge): IFavoriteBadge {
        return plainToClass(FavoriteBadge, prismaFavoriteBadge);
    }
}