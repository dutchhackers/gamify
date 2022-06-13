export interface IApplicationUser {
    applicationId: number;
    userId: number;
    earnedAt: Date;

    user?: {
        firstname?: string;
        lastname?: string;
    }
}