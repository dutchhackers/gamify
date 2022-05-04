import { ApplicationsService } from '@gamify/application';
import { DataModule } from '@gamify/data';
import { UsersService } from '@gamify/users';
import { Module } from '@nestjs/common';
import { BadgesController } from './badges.controller';
import { BadgesService } from './badges.service';

@Module({
  imports: [DataModule],
  controllers: [BadgesController],
  providers: [BadgesService, ApplicationsService, UsersService],
  exports: [BadgesService],
})
export class BadgesModule {}
