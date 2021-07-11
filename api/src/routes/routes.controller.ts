import { Controller, Get } from '@nestjs/common';
import { RoutesService, Route } from './routes.service';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) { }

  @Get()
  findAll(): Route[] {
    return this.routesService.findAll();
  }
}
