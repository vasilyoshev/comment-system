import { CommentTypesEnum } from '../enums/comment-types.enum';

export interface CommentInfo {
    id: string;
    date: Date;
    type: CommentTypesEnum;
    title: string;
}
