import { Role } from "@gamify/shared";

export class AuthUserModel {
    id: number;
    createdAt: Date;
    email: string;
    firstname?: string;
    lastname?: string;
    moderationRole: Role;

    firebaseUid: string;
    firebaseData: object;
}