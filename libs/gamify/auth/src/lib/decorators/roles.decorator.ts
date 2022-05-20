import { Role } from "@gamify/shared";
import { SetMetadata } from "@nestjs/common";

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);