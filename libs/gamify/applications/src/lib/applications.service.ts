import { Role } from '@gamify/core';
import { DataService } from '@gamify/data';
import { UsersService } from '@gamify/users';
import { Injectable } from '@nestjs/common';
import { CreateApplicationInput } from './dto/create-application.input';
import { UpdateApplicationInput } from './dto/update-application.input';
import { ApplicationModel, ApplicationUserModel } from './models';

@Injectable()
export class ApplicationsService {

    constructor(private readonly data: DataService, private readonly usersService: UsersService) {}

    findMany(): Promise<ApplicationModel[]> {
        return this.data.application.findMany();
    }

    findOne(id: number): Promise<ApplicationModel> {
        return this.data.application.findUnique({ where: { id }});
    }

    create(createApplicationInput: CreateApplicationInput): Promise<ApplicationModel> {
        return this.data.application.create({
            data: createApplicationInput
        });
    }

    update(id: number, updateApplicationInput: UpdateApplicationInput): Promise<ApplicationModel> {
        return this.data.application.update({
            where: { id },
            data: updateApplicationInput
        })
    }

    remove(id: number): Promise<ApplicationModel> {
        return this.data.application.delete({ where: { id }});
    }

    async findApplicationUser(applicationId: number, userId: number): Promise<ApplicationUserModel> {
        return this.data.applicationUser.findUnique({
            where: {
                applicationId_userId: { applicationId, userId }
            }
        });
    }

    addUserToApplication(applicationId: number, userId: number): Promise<ApplicationUserModel> {
        return this.data.applicationUser.create({
            data: {
                applicationId,
                userId
            }
        });
    }

    removeUserFromApplication(applicationId: number, userId: number): Promise<ApplicationUserModel> {
        return this.data.applicationUser.delete({
            where: {
                applicationId_userId: { applicationId, userId }
            }
        });
    }

    async isNameUnique(name: string): Promise<boolean> {
        const app = await this.data.application.findFirst({
            where: { name }
        });

        if (app !== null) {
            return false;
        }

        return true;
    }

    async canModerateApplication(applicationId: number, userId: number): Promise<boolean> {
        const user = await this.usersService.find(userId);
        if (user.moderationRole === Role.ADMIN) {
            return true;
        }

        const application = await this.findOne(applicationId);
        if (application.ownerUserId == user.id) {
            return true;
        }

        // TODO check if user is added as moderator to the application

        return false;
    }
}
