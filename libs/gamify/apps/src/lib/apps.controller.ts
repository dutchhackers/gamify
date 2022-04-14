import { Controller, Get } from '@nestjs/common';
import { AppsService } from './apps.service';

@Controller('apps')
export class AppsController {

    constructor(private appsService: AppsService) {}

    @Get()
    index() {
        return this.appsService.getAll();
    }
}
