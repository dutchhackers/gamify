import { DataService } from '@gamify/data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApplicationsService {

    constructor(private readonly dataService: DataService) {}

    getAll() {
        return this.dataService.application.findMany();
    }

}
