import { IThumbed } from "./thumbed";
import { IUser } from "./user";

export interface IGroup extends IThumbed {
    id: string;
    name: string;
    members: string[];
    owner: string;
    fileToSave?: string;
}
