import { Observable, Subscription } from "rxjs";
import { EventEmitter } from "events";
import {
    GenericServerResponse,
    IFileUpload,
    IFile,
    IFolder,
    IGroup,
    ILargeViewURLParams,
    INode,
    INotice,
    ITeam,
    ITile,
    IUser,
    TFileType,
    TLGSourceType
} from "./interfaces";

declare module 'PUSHFOR' {
    export = PUSHFOR;
}

declare const PUSHFOR: IPushforSDK;

interface IPushforSDK {
    
    setup(apiEndpoint: string, webSocketHost: string, webScoketsPort: string): void;

    apiPost<T>(url: string, data?: any, anonymous?: boolean): Observable<T>;
    apiGet<T>(url: string, data?: any, anonymous?: boolean): Observable<T>;
    apiUpload<T>(url: string, data: any, file: File): Observable<T>;

    LargeViewCommands: EventEmitter;
    sessionCredentialsPresentOnStartup: boolean;
    shouldReload: Observable<boolean>;

    user: {
        get(): IUser;
        asObservable(): Observable<IUser>;
        triggerFetchUserInfo(): Subscription;
        triggerLogin(usernameOrEmail: string, password: string, onError: any, tfaCode?: string): Subscription;
        triggerLogout(): void;
        triggerRegister(email: string, username: string, password: string, signInPath: string): Observable<GenericServerResponse>;
        triggerForgotPassword(email: string): Observable<GenericServerResponse>;
        triggerLoginOAuth2(data: any, type: string): Observable<GenericServerResponse>;
        triggerChangeForgottenPassword(password: string, hash: string): Observable<GenericServerResponse>;
        triggerConfirmAccount(hash: string): Observable<GenericServerResponse>;
        triggerUpdateUserInfo(user: IUser): void;
        triggerChangePassword(newPwd: string, oldPwd: string): Observable<any>;
    };

    users: {
        get(): IUser[];
        asObservable(): Observable<IUser[]>;
        asObservableById(teamId: string): Observable<IUser>;
        getById(id: string): IUser;
    };

    multiFactorAuthentication: {
        requestSecret(): Observable<any>;
        verifySecret(code: string): Observable<any>;
        disable(): Observable<any>;
        getStatus(): Observable<any>;
    }

    analytics: {
        pageVisible(fileId: string, type: TFileType, source: TLGSourceType, url: ILargeViewURLParams, pageNumber: number, totalPages: number, conversatinId: string),
        pageInvisible(fileId: string, type: TFileType, source: TLGSourceType, url: ILargeViewURLParams, pageNumber: number),
        startedPlaying(fileId: string, type: TFileType, source: TLGSourceType, url: ILargeViewURLParams, position: number, totalLength: number, conversatinId: string),
        stoppedPlaying(fileId: string, type: TFileType, source: TLGSourceType, url: ILargeViewURLParams, position: number),
        triggerSendFileViewedPageDocumentByTeam(teamId: string, fileId: string, page: number, seconds: number, totalPages: number): void;
        triggerSendFileViewedPageDocumentByParcel(parcelId: string, fileId: string, page: number, seconds: number, totalPages: number): void;
        triggerSendFileViewedPageDocumentByComment(parcelId: string, conversationId: string, commentId: string, fileId: string, page: number, seconds: number, totalPages: number): void;
        triggerSendFileViewedTimeDocumentByTeam(teamId: string, fileId: string, startTime: number, endTime: number, totalSeconds: number): void;
        triggerSendFileViewedTimeDocumentByParcel(parcelId: string, fileId: string, startTime: number, endTime: number, totalSeconds: number): void;
        triggerSendFileViewedTimeDocumentByComment(parcelId: string, conversationId: string, commentId: string, fileId: string, startTime: number, endTime: number, totalSeconds: number): void;
        askForFileViewedPageDocumentTimePerDateByTeam(teamId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedPageDocumentTimePerDateByParcel(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedPageDocumentTimePerDateByComment(parcelId: string, conversatinId: string, commentId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedPageDocumentTimePerDateByPushToLink(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedPageDocumentTimePerPagePerUserByTeam(teamId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedPageDocumentTimePerPagePerUserByParcel(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedPageDocumentTimePerPagePerUserByComment(parcelId: string, conversatinId: string, commentId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedTimeDocumentTimePerDateByTeam(teamId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedTimeDocumentTimePerDateByParcel(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedTimeDocumentTimePerDateByComment(parcelId: string, conversatinId: string, commentId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedTimeDocumentTimePerDateByPushToLink(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedTimeDocumentSectionsViewedPerUserByTeam(teamId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedTimeDocumentSectionsViewedPerUserByParcel(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedTimeDocumentSectionsViewedPerUserByComment(parcelId: string, conversatinId: string, commentId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedAllDocumentTypesUniqueViewersPerOrganisationByPushToLink(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedAllDocumentTypesUniqueViewersPerOrganisationByParcel(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedAllDocumentTypesUniqueViewersPerOrganisationByComment(parcelId: string, conversationId: string, commentId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedAllDocumentTypesUniqueViewersPerOrganisationByTeam(teamId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedAllDocumentTypesUniqueViewersPerReferrerByParcel(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedAllDocumentTypesUniqueViewersPerReferrerByComment(parcelId: string, conversationId: string, commentId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedAllDocumentTypesUniqueViewersPerReferrerByTeam(teamId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedAllDocumentTypesUniqueViewersPerReferrerByPushToLink(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedAllDocumentTypesUniqueViewersPerDateByParcel(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedAllDocumentTypesUniqueViewersPerDateByComment(parcelId: string, conversationId: string, commentId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedAllDocumentTypesUniqueViewersPerDateByTeam(teamId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedAllDocumentTypesUniqueViewersPerDateByPushToLink(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedPageDocumentTimePerPageByTeam(teamId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedPageDocumentTimePerPageByParcel(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedPageDocumentTimePerPageByComment(parcelId: string, conversationId: string, commentId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedPageDocumentTimePerPageByPushToLink(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedTimeDocumentViewsPerSectionByTeam(teamId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedTimeDocumentViewsPerSectionByParcel(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedTimeDocumentViewsPerSectionByComment(parcelId: string, conversationId: string, commentId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedTimeDocumentViewsPerSectionByPushToLink(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedAllDocumentTypesUniqueViewersPerLocationByParcel(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedAllDocumentTypesUniqueViewersPerLocationByTeam(teamId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedAllDocumentTypesUniqueViewersPerLocationByComment(parcelId: string, conversationId: string, commentId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedAllDocumentTypesUniqueViewersPerLocationByPushToLink(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedTimeDocumentAverageTimeLengthByParcel(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedTimeDocumentAverageTimeLengthByTeam(teamId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedTimeDocumentAverageTimeLengthByComment(parcelId: string, conversationId: string, commentId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedTimeDocumentAverageTimeLengthByPushToLink(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedTimeDocumentAverageTimeLengthPerDateByParcel(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedTimeDocumentAverageTimeLengthPerDateByTeam(teamId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedTimeDocumentAverageTimeLengthPerDateByComment(parcelId: string, conversationId: string, commentId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedTimeDocumentAverageTimeLengthPerDateByPushToLink(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedPageDocumentAveragePageViewedByTeam(teamId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedPageDocumentAveragePageViewedByParcel(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedPageDocumentAveragePageViewedByComment(parcelId: string, conversationId: string, commentId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedPageDocumentAveragePageViewedByPushToLink(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedPageDocumentAveragePageViewedPerDateByTeam(teamId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedPageDocumentAveragePageViewedPerDateByParcel(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedPageDocumentAveragePageViewedPerDateByComment(parcelId: string, conversationId: string, commentId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
        askForFileViewedPageDocumentAveragePageViewedPerDateByPushToLink(parcelId: string, fileId: string, startDate: Date, endDate: Date): Observable<any>;
    }

    contacts: {
        contactsLoadingState: Observable<boolean>;
        getTrustedContacts(): IUser[];
        getFrequentContacts(): IUser[];
        getBlockedContacts(): IUser[];
        getRequestContacts(): IUser[];
        trustedAsObservable(): Observable<IUser[]>;
        frequentAsObservable(): Observable<IUser[]>;
        blockedAsObservable(): Observable<IUser[]>;
        requestAsObservable(): Observable<IUser[]>;
        triggerFetchGetContacts(): Subscription;
        triggerFetchGetRequestContacts(): Subscription;
        triggerDeleteContact(userId: string): void;
        currentSearchAsObservable(): Observable<IUser[]>;
        triggerFetchUserSearch(input: string): any;
        triggerTrustedContactRequest(userId: string): any;
        triggerHandlerContactRequest(accept: boolean, userId: string): void;
    }
    library: {
        getRoot(): IFolder;
        rootAsObservable(): Observable<IFolder>;
        getById(parcelId: string): INode;
        asObservableById(parcelId: string): Observable<INode>;
        triggerFileUpload(folderId: string, file: File): IFileUpload
        triggerBrowse(filter?: string, multiple?: boolean): Promise<File[]>;
        triggerGetFile(fileId: string): void;
        triggerGetFolder(folderId: string): void;
        askForFile(fileId: string): Observable<IFile>;
        askForFolder(folderId: string): Observable<IFolder>;
        triggerMove(nodeType: string, nodeId: string, parentId: string): void;
        triggerRemove(fileIds: string[], folderIds: string[]);
        askForSearchResults(folderId: string, query: string): Observable<string[]>;
        triggerSave(parcelId: string, parentId: string, isP2L: boolean): void;
        triggerDownloadAny(fileId: string, fileName: string, parcelId: string, commentId: string, teamId: string, tileId: string, p2lHash: string, p2lCookie: string, sourceType: TLGSourceType, isOwner: boolean);
        setDocumentLength(fileId: string, lenght: number): void;
        getDocumentLength(fileId: string): number;
        triggerCreateFolder(name: string, parentId: string): void;

    };
    teams: {
        onTeamsKnown: Observable<boolean>;
        get(): ITeam[];
        asObservable(): Observable<ITeam[]>;
        currentTeamGet(): ITeam;
        currentTeamAsObservable(): Observable<ITeam>;
        triggerFetchTeams(): void;
        triggerFetchTeamUI(teamId: string): void;
        triggerTeamCreate(name: string): Observable<string>;
        triggerChangeNameOffline(team: ITeam, name: string): void;
        triggerChangeLogoOffline(team: ITeam, base64Source: string): void;
        triggerSetCurrentTeam(teamId: string): void;
        fetchCurrentTeamFromCache(): void;
        triggerSetTeamEditMode(teamId: string, editMode: boolean): void;
        triggerAddTile(teamId: string, tile: ITile): void;
        triggerRemoveTile(teamId: string, tile: ITile): void;
        triggerUpdateTile(teamId: string, tile: ITile, change: any): void;
        triggerMoveTile(teamId: string, tile: ITile, after: ITile): void;
        triggerEnableTeamFeature(teamId: string, feature: string): void;
        triggerDisableTeamFeature(teamId: string, feature: string): void;
        triggerChangeTeamProperty(teamId: string, property: string, value: string);
        triggerPublish(teamId: string)
        triggerLockTeam(teamId: string)
        triggerUnlockTeam(teamId: string)
        triggerGetMembersList(teamId: string)
        triggerUpdateTeamMembers(teamId: string, members: any)
    };
    groups: {
        get(): IGroup[];
        asObservable(): Observable<IGroup[]>;
        triggerFetchGroups(): Subscription;
        getById(id: string): IGroup;
        asObservableById(id: string): Observable<IGroup>;
        triggerUpdateGroup(group: IGroup, member: any): any;
        triggerDeleteGroup(group: IGroup): void;
    };
    notice: {
        get(): INotice[];
        asObservable(): Observable<INotice[]>;
        triggerFetchNotices(): void;
    };
}
