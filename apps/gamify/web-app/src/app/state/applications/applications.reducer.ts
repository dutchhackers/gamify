import { Application } from "@gamify/shared";
import { createReducer, on } from "@ngrx/store";
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { retrievedApplication } from "./applications.actions";

interface EntityState<V> {
    ids: string[] | number[];
    entities: { [ id: number]: V };
  }

export interface ApplicationsState extends EntityState<Application> {

    selectedUserId: string | null;
}



export const applicationsReducer = createReducer(
    initialState,
    on(retrievedApplication, (state, { applications }) => applications)
)

export const adapter: EntityAdapter<Application> = createEntityAdapter<Application>();