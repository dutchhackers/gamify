import { Role } from "../enums";
import { IUser } from "../interfaces/user.interface";

export class User implements IUser {
    id: number;
    createdAt: Date;
    email: string;
    firstname?: string;
    lastname?: string;
    firebaseUid?: string;
    moderationRole: Role;
}