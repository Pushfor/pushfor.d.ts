import { IThumbed } from "./thumbed";

export interface IUser extends IThumbed {
    online: boolean;
    usertype?: string;
    email?: string;
    storage?: number;
    storage_limit?: number;
    first_login?: boolean;
    all_silent_notice?: boolean;
    receipt_store?: null;
    receipt_type?: null;
    added?: boolean;
    mfaStatus?: string;
}
