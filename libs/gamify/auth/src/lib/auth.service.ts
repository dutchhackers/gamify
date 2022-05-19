import { DataService } from '@gamify/data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    constructor(private readonly data: DataService) {}
    
    findByFirebaseId(firebaseUid: string) {
        return this.data.user.findUnique({
            where: { firebaseUid }
        })
    }

    findByEmail(email: string) {
        return this.data.user.findUnique({
            where: { email }
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

    updateFirebaseUid(id: number, firebaseUid: string) {
        return this.data.user.update({
            where: { id },
            data: {
                firebaseUid
            }
        })
    }
}
