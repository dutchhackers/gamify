import { Injectable } from '@nestjs/common';
import { App, ApplicationType } from '@gamify-api/core';

@Injectable()
export class AppsService {

    private apps: App[] = [];

    constructor() {
        this.mockApps();
    }

    getAll(): App[] {
        return this.apps;
    }

    mockApps() {
        this.apps = [
            {
                id: 1,
                application_type: ApplicationType.GAME,
                name: "Code Heroes",
                description: "Go commit something or make a pull-request",
                admin_user_id: 1,
                external_application_url: "https://codeheroes.move4mobile.io",
                overview_priority: 100,
                overview_image_path: "",
                in_overview: true,
            },
            {
                id: 2,
                application_type: ApplicationType.CHALLENGE,
                name: "Walking Challenge 2022",
                description: "Walk or run to score points",
                admin_user_id: 1,
                external_application_url: "",
                overview_priority: 90,
                overview_image_path: "",
                in_overview: true,
                start_date: new Date("04-04-2022"),
                end_date: new Date("24-04-2022")
            },
            {
                id: 3,
                application_type: ApplicationType.EXTERNAL_APP,
                name: "Krew",
                description: "Krew integration",
                admin_user_id: 2,
                external_application_url: "",
                overview_priority: 0,
                overview_image_path: "",
                in_overview: false,
            }
        ];
    }

}
