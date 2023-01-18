import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  // resuelve la ruta con slash o sin slash
  @Get('/ruta/')
  hellow() {
    return 'cno/ sa/ ';
  }
}
