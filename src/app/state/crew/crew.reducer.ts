import { createReducer, on } from "@ngrx/store";
import { crewStateDefaults, CrewState } from "./crew.state";
import { setActiveUser } from "./crew.actions";

export const crewReducer = createReducer<CrewState>(
    crewStateDefaults,
    on(
        setActiveUser,
        (state, { activeUser }) => ({
            ...state,
            activeUser,
        }),
    ),
);
