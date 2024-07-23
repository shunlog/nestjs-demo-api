import { Module } from '@nestjs/common';
import { TodoItemsService } from './todo-items.service';
import { TodoItemsController } from './todo-items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoItem } from './entities/todo-item.entity';

@Module({
    imports: [TypeOrmModule.forFeature([TodoItem])],
    controllers: [TodoItemsController],
    providers: [TodoItemsService],
})
export class TodoItemsModule { }
