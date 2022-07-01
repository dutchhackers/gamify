export interface IApplicationUser {
    applicationId: number;
    userId: number;
    joinedAt: Date;

    user?: {
        firstname?: string;
        lastname?: string;
    }
}