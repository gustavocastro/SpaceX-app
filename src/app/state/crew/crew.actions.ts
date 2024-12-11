import { createAction, props } from "@ngrx/store";
import { User } from "../../components/spx-crew/details/spx-crew-details/spx-crew-details.component";

export const setActiveUser = createAction(
    '[Crew] Set Active User',
    props<{ activeUser: User | null }>(),
)
