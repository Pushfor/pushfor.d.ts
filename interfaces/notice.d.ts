export interface INotice {
    id: string;
    text: string;
    createdAt: Date;
    senderId: string;
    message: string;
    type: string;
    updatedAt: Date;
    viewed: boolean;
}
