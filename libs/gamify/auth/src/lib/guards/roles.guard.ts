import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class RolesGuard implements CanActivate {

    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
            // If there are no roles defined, the action is allowed.
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user = request.user;

        return roles.includes(user.moderationRole);
    }
}