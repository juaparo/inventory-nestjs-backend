import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb://localhost:${configService.get<string>('MONGODB_PORT')}/${configService.get<string>('MONGODB_NAME')}`,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
