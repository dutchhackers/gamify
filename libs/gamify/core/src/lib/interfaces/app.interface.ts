import { ApplicationType } from "../enums"; 

export interface App {
    id: number;
    application_type: ApplicationType;
    name: string;
    description: string;
    apiKey?: string;
    admin_user_id: number;
    external_application_url: string;
    overview_priority: number;
    overview_image_path: string;
    in_overview: boolean;
    start_date?: Date;
    end_date?: Date;
}