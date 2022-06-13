import { ApplicationUserModel, CreateApplicationInput, UpdateApplicationInput } from '@gamify/application';
import { Role, ApplicationConverter, Application, ApplicationUser, ApplicationUserConverter } from '@gamify/shared';
import { DataService } from './../data.service';
import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserModel } from '@gamify/auth';

@Injectable()
export class ApplicationsService {

    constructor(
        private readonly data: DataService, 
        private readonly usersService: UsersService
    ) {}

    async findMany(filter?: string|undefined, user?: UserModel): Promise<Application[]> {
        const applications = (await this.data.application.findMany()).map(app => ApplicationConverter.fromPrismaApplication(app));
        if (! filter) {
            return applications;
        }

        if (filter === 'moderatable') {
            return applications.filter(app => this.canModerateApplication(app, user));
        }

        return applications;
    }

    async findOne(id: number): Promise<Application> {
        return ApplicationConverter.fromPrismaApplication(
            await this.data.application.findUnique({ where: { id }})
        );
    }

    async create(createApplicationInput: CreateApplicationInput): Promise<Application> {
        return ApplicationConverter.fromPrismaApplication(await this.data.application.create({
            data: createApplicationInput
        }));
    }

    async update(id: number, updateApplicationInput: UpdateApplicationInput): Promise<Application> {
        return ApplicationConverter.fromPrismaApplication(await this.data.application.update({
            where: { id },
            data: updateApplicationInput
        }));
    }

    async remove(id: number): Promise<Application> {
        return ApplicationConverter.fromPrismaApplication(await this.data.application.delete({ where: { id }}));
    }

    async findApplicationUsers(applicationId: number): Promise<ApplicationUser[]> {
        return (await this.data.applicationUser.findMany({ 
            where: { applicationId },
            select: {
                userId: true,
                applicationId: true,
                joinedAt: true,
                user: {
                    select: {
                        firstname: true,
                        lastname: true,
                    }
                }
            }
        })).map(appUser => ApplicationUserConverter.fromPrismaApplicationUser(appUser));
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

    async canModerateApplicationById(applicationId: number, userId: number): Promise<boolean> {
        const user = await this.usersService.findOne(userId);
        if (!user) {
            return false;
        }

        if (user.moderationRole === Role.ADMIN) {
            return true;
        }

        const application = await this.findOne(applicationId);
        if (!application) {
            return false;
        }

        if (application.ownerUserId == user.id) {
            return true;
        }
        
        return false;
    }

    canModerateApplication(application: Application, user: UserModel): boolean {
        if (user.moderationRole === Role.ADMIN) {
            return true;
        }

        const roles = [Role.ADMIN, Role.MODERATOR];

        if (roles.includes(user.moderationRole as Role) && user.id === application.ownerUserId) {
            return true
        }

        return false;
    }
}
