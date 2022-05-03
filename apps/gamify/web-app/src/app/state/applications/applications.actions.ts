import { IApplication } from "@gamify/shared";
import { createAction, props } from "@ngrx/store";

export const retrievedApplicationsList = createAction(
    '[Applications] Retrieved Applications List',
    props<{ applications: IApplication[] }>()
);

export const retrievedApplication = createAction(
    '[Applications] Retrieved Application',
    props<{ application: IApplication }>()
);

export const addApplication = createAction(
    '[Applications] Add Application',
    props<{ application: IApplication }>()
);

export const updateApplication = createAction(
    '[Applications] Update Application',
    props<{ application: IApplication }>()
);

export const deleteApplication = createAction(
    '[Applications] Delete Application',
    props<{ application: IApplication }>()
);