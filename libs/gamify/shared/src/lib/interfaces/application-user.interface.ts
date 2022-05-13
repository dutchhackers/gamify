export interface IApplicationUser {
    applicationId: number;
    userId: number;
    earnedAt: Date;

    user?: {
        firstName?: string;
        lastName?: string;
    }
}