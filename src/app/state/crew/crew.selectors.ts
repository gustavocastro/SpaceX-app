import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "../features";
import { CrewState } from "./crew.state";

export const selectCrewState = createFeatureSelector<CrewState>(
    Features.Crew,
);

export const selectActiveUser = createSelector(
    selectCrewState,
    crewState => crewState.activeUser,
);
