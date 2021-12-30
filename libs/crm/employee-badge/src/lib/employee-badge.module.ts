import { DataModule } from '@crm/data';
import { Module } from '@nestjs/common';
import { EmployeeBadgeService } from './employee-badge.service';

@Module({
  imports: [DataModule],
  controllers: [],
  providers: [EmployeeBadgeService],
  exports: [EmployeeBadgeService],
})
export class EmployeeBadgeModule {}
