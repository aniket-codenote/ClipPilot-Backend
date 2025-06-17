import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('health')
export class HealthcheckController {
  @Get()
  health(@Req() request: Request){
    return { status: 'OK' };
  }
}
