import { DataModule } from '@gamify/data';
import { UsersModule } from '@gamify/users';
import { Module } from '@nestjs/common';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';

@Module({
  imports: [DataModule, UsersModule],
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
  exports: [ApplicationsService],
})
export class ApplicationsModule {}
