import { ITile } from "./tile";
import { IThumbed } from "./thumbed";

export interface ITeam extends IThumbed {
    ownerId: string;
    isOwner: boolean;
    tiles: ITile[];
    members: string[];
    features?: {
        [key: string]: boolean
    },
    theme?: {
        [key: string]: string
    },
    locked?: boolean;
    _nameDirty?: boolean;
    _imageDirty?: boolean;
    uiLoaded: boolean;
}
