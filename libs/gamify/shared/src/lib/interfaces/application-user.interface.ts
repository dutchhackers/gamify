export interface IApplicationUser {
    applicationId: number;
    userId: number;
    joinedAt: Date;

    user?: {
        firstName?: string;
        lastName?: string;
    }
}