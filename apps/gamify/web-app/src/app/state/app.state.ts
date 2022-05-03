import { Application } from "@gamify/shared";

export interface AppState {
    applications: ReadonlyArray<Application>;
}