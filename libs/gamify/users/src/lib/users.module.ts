import { BadgesModule } from '@gamify/badge';
import { DataModule } from '@gamify/data';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
  imports: [DataModule, BadgesModule],
})
export class UsersModule {}
