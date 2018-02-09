export interface ITile {
    id: string;
    backgroundImage: string;
    label: string;
    url: string;
    type: "link" | "folder" | "file" | undefined;
    libraryItemId: string;
    invisible?: boolean;
    group_access?: string[];
    screenshot?: boolean;
    background_identifier?: string;
    background_base64?: string;
    download?: boolean;
    mime?: string;
}
