import { DateTime } from "luxon";

export class UserModel {
    id: number;
    createdAt: DateTime;
    email: string;
    firstname?: string;
    lastname?: string;
    firebaseUid: string;
    firebaseData: object;
}