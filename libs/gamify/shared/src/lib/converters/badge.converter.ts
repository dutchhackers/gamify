import { PrismaBadge } from "@gamify/data";
import { plainToClass } from "class-transformer";
import { IBadge } from "../interfaces/badge.interface";
import { Badge } from "../models";

export class BadgeConverter { 
    static fromPrismaBadge(prismaBadge: PrismaBadge): IBadge {
        return plainToClass(Badge, prismaBadge);
    }
}