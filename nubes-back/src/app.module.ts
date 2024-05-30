import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookingsModule } from './bookings/bookings.module';
import { UsersModule } from './users/users.module';
import { AvailabilityModule } from './availability/availability.module';
import { BookingsConfirmedModule } from './bookings_confirmed/bookings_confirmed.module';
import { TablesModule } from './tables/tables.module';
import { PaymentsModule } from './payments/payments.module';

import { AppService } from './app.service';
import { BookingsConfirmedService } from './bookings_confirmed/bookings_confirmed.service';
import { BookingsService } from './bookings/bookings.service';
import { AvailabilityService } from './availability/availability.service';

import { AppController } from './app.controller';
import { PaymentsController } from './payments/payments.controller';
import { BookingsConfirmedController } from './bookings_confirmed/bookings_confirmed.controller';
import { AvailabilityController } from './availability/availability.controller';

import {
  Bookings,
  Users,
  Tables,
  Payment,
  BookingsConfirmed,
} from './entities';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../.env',
    }),
    CacheModule.register(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        database: 'postgres',
        host: configService.get('SUPABASE_DB_HOST'),
        port: parseInt(configService.get('SUPABASE_DB_PORT')),
        username: configService.get('SUPABASE_DB_USER'),
        password: configService.get('SUPABASE_DB_PASSWORD'),
        entities: [Bookings, Payment, Users, Tables, BookingsConfirmed],
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
    BookingsModule,
    UsersModule,
    AvailabilityModule,
    TablesModule,
    PaymentsModule,
    BookingsConfirmedModule,
  ],
  controllers: [
    AppController,
    BookingsConfirmedController,
    PaymentsController,
    AvailabilityController,
  ],
  providers: [
    AppService,
    BookingsConfirmedService,
    BookingsService,
    AvailabilityService,
  ],
})
export class AppModule {}
