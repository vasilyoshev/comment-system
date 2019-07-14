import { CommentTypesEnum } from '../enums/comment-types.enum';

export interface CommentData {
    id: string;
    date: Date;
    type: CommentTypesEnum;
    title: string;
}
