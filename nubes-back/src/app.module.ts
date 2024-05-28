import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';

import { AppService } from './app.service';

import { BookingsModule } from './bookings/bookings.module';
import { UsersModule } from './users/users.module';
import { AvailabilityModule } from './availability/availability.module';

import { TablesModule } from './tables/tables.module';
import { PaymentsModule } from './payments/payments.module';
import { BookingsConfirmedController } from './bookings_confirmed/bookings_confirmed.controller';
import { BookingsConfirmedService } from './bookings_confirmed/bookings_confirmed.service';
import { BookingsConfirmedModule } from './bookings_confirmed/bookings_confirmed.module';
import { Bookings, Users, Tables } from './entities';

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
        entities: [Bookings, Users, Tables],
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
  controllers: [AppController, BookingsConfirmedController],
  providers: [AppService, BookingsConfirmedService],
})
export class AppModule {}
