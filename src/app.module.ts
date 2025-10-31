import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlansModule } from './plans/plans.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { PaymentsModule } from './payments/payments.module';
import { DevicesModule } from './devices/devices.module';
import { ProfilesModule } from './profiles/profiles.module';
import { ContentsModule } from './contents/contents.module';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: config.get<'postgres'>('DB_CONNECTION'),
        host: config.get<string>('DB_HOST'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        port: config.get<number>('DB_PORT'),
        database: config.get<string>('DB_DATABASE'),
        synchronize: true,
        autoLoadEntities: true,
        logging: true,
        entities: [__dirname + 'dist/**/*.entity{.ts | .js}'],
      }),
    }),
    PlansModule,
    SubscriptionsModule,
    PaymentsModule,
    DevicesModule,
    ProfilesModule,
    ContentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
