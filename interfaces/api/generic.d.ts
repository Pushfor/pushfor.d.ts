export interface GenericServerResponse {
    success: boolean;
}

export interface GenericServerErrorResponse extends GenericServerResponse {
    error: string;
    code: string;
    message: string;
    success: false;
}
