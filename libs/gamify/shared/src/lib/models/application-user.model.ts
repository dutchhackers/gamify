import { IApplicationUser } from "../interfaces/application-user.interface";

export class ApplicationUser implements IApplicationUser {
    applicationId: number;
    userId: number;
    earnedAt: Date;

    user?: {
        firstname?: string;
        lastname?: string;
    }
}