import { DataModule } from '@gamify/data';
import { ApplicationsService, GamifySharedModule, UsersService } from '@gamify/shared';
import { Module } from '@nestjs/common';
import { ApplicationsController } from './applications.controller';

@Module({
  imports: [DataModule, GamifySharedModule],
  controllers: [ApplicationsController],
  providers: [ApplicationsService, UsersService],
  exports: [],
})
export class ApplicationsModule {}
