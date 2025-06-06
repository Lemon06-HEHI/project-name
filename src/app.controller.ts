import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/it')
  getit(): string {
    return 'IT work';
  @Get('/it2')
  getit(): string{
    return 'IT work2'
  }
}
