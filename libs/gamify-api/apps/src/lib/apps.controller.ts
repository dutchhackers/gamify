import { Controller, Get } from '@nestjs/common';
import { AppsService } from './apps.service';

@Controller('apps')
export class AppsController {

    constructor(private appsService: AppsService) {}

    @Get()
    index() {
        this.appsService.mockApps(); // TODO Should be removed in the future
        const apps = this.appsService.getApps();
        return apps;
    }
}
