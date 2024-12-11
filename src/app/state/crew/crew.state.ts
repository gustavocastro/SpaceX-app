import { User } from "../../components/spx-crew/details/spx-crew-details/spx-crew-details.component";

export interface CrewState {
    activeUser: User | null,
};

export const crewStateDefaults: CrewState = {
    activeUser: null,
};
