import { Role } from "../enums";

export interface IUser {
    id: number;
    createdAt: Date;
    email: string;
    firstname?: string;
    lastname?: string;
    moderationRole: Role;
}