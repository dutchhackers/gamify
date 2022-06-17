import { User } from "./user.model";

export class AuthUser extends User {
    firebaseUid: string;
    firebaseData: object;
}