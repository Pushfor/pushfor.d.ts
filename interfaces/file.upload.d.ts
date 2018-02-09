import { Observable } from "rxjs/Observable";
import { IFile } from "./file";

export type IFileUpload =
    Observable<{
        progress: Observable<ProgressEvent>;
        upload: Observable<IFile>;
    }>
