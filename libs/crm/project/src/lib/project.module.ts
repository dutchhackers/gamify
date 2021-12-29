import { DataModule } from '@crm/data';
import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectResolver } from './resolvers/project.resolver';

@Module({
  imports: [DataModule],
  controllers: [],
  providers: [ProjectService, ProjectResolver],
  exports: [ProjectService],
})
export class ProjectModule {}
