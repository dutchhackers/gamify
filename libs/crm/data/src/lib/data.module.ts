import { CacheModule, Module } from '@nestjs/common';
import { DataService } from './data.service';

@Module({
  imports: [CacheModule.register()],
  controllers: [],
  providers: [DataService],
  exports: [DataService],
})
export class DataModule {}
