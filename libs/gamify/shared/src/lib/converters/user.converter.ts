import { AuthUser } from "../models";
import { IUser } from "../interfaces";

export class UserConverter {
    static fromAuthUserModel(authUserModel: AuthUser): IUser {
        return {
            id: authUserModel.id,
            createdAt: authUserModel.createdAt,
            email: authUserModel.email,
            firstname: authUserModel.firstname,
            lastname: authUserModel.lastname,
            moderationRole: authUserModel.moderationRole,
        }
    }
}