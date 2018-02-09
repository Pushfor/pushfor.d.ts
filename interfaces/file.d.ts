import { INamed } from "./named";
import { INode } from "./node";
import { IThumbed } from "./thumbed";

export enum FileType {
    IMAGE,
    PDF,
    AUDIO,
    VIDEO
}

export interface IFileEvent {
    commentId: string;
    parcelId: string;
    conversationId: string;
    eventTime: Date;
    userId: string; 
    latitude: string;
    longitude: string;
}

export interface IFile extends INode, IThumbed {    
    allowDownload: boolean;    
    amItheOwner: boolean;
    converted: boolean;
    createdAt: Date;
    mime: string;
    requireLocation: boolean;
    requireSecureView: boolean;
    requireWatermark: boolean;
    tags: string[];
    token: string;
    type: FileType;
    updatedAt: Date;
    url: string;
    viewEvents: IFileEvent[];
    displayShareButtons: boolean;
    maxDevices: number;
    viewsPerDevice: number;
    urlIdentifier: string;
}

export interface IFileP2L {
    id: string;
    name: string;
    allowDownload: boolean;
    expirationDate: number;
    mime: string;
    requireLocation: boolean;
    requireSecureView: boolean;
    requireWatermark: boolean;
    url: string;
    displayShareButtons: boolean;
    maxDevices: number;
    viewsPerDevice: number;
    devicesLeft: number;
    viewsLeft: number;
    urlIdentifier: string;
    cookie: string;
    tracked: boolean;
    secured: boolean;
    senderName: string;
    isActive: boolean;
    isDeleted: boolean;
    isPulled: boolean;
}
