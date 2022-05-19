import { ApiProperty } from "@nestjs/swagger";
import { IApplicationUser } from "../interfaces/application-user.interface";

export class ApplicationUser implements IApplicationUser {
    
    @ApiProperty()
    applicationId: number;
    
    @ApiProperty()
    userId: number;
    
    @ApiProperty()
    joinedAt: Date;

    @ApiProperty()
    user?: {
        firstName?: string;
        lastName?: string;
    }
}