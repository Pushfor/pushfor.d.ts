import { INamed } from "./named";

export interface INode extends INamed {
    nodeType: "file" | "folder";
    parentId: string;
}
