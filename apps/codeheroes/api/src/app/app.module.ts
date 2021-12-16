import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CoreModule } from '@codeheroes/core';
import { AuthModule } from '@codeheroes/auth';

@Module({
  imports: [CoreModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
