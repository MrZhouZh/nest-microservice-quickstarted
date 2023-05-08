import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    @Inject('CALC_SERVICE') private calcClient: ClientProxy,
    @Inject('LOG_SERVICE') private logClient: ClientProxy,
  ) {}

  @Get()
  calc(@Query('num') str: string): Observable<number> {
    const nums = str.split(',').map((s) => Number(s));
    this.logClient.emit('log', `calc: ${nums}`);
    return this.calcClient.send('sum', nums);
  }
}
