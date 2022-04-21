import { DataService } from '@gamify/data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    constructor(private readonly data: DataService) {}

    findByFirebaseId(firebaseUid: string) {
        return this.data.user.findUnique({
            where: { firebaseUid }
        })
    }

    create(email: string, firebaseUid: string) {
        return this.data.user.create({
            data: {
                email,
                firebaseUid
            }
        })
    }

}
