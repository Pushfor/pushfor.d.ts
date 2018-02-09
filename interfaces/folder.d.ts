import { INode } from "./node";

export interface IFolder extends INode {
    children: string[];
    folder: boolean;
    isOwner: boolean;
    created: number;
    updated: number;
}
