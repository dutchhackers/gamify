import { DataModule } from '@foosball/data';
import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileResolver } from './resolvers/profile.resolver';

@Module({
  imports: [DataModule],
  providers: [ProfileResolver, ProfileService],
  exports: [ProfileService],
})
export class ProfileModule {}
