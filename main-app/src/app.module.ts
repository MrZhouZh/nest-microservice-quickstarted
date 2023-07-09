import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CALC_SERVICE',
        transport: Transport.TCP,
        options: {
          // host: '192.168.0.106',
          host: '0.0.0.0',
          port: 8888,
        },
      },
      {
        name: 'LOG_SERVICE',
        transport: Transport.TCP,
        options: {
          // host: '192.168.0.106',
          host: '0.0.0.0',
          port: 9999,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
