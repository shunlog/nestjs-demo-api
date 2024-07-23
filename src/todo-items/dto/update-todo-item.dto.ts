import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoItemDto } from './create-todo-item.dto';
import PostEntity from 'src/posts/post.entity';

export class UpdateTodoItemDto extends PartialType(CreateTodoItemDto) {
    text?: string;
    priority?: number;
    post: PostEntity;
}
