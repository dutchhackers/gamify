import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { configuration } from './config/configuration';
import { validationSchema } from './config/validation';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: join(process.cwd(), 'libs/gamify/core/.env'),
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
  ]
})
export class CoreModule {}
