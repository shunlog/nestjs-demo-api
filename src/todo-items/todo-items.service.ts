import { Injectable } from '@nestjs/common';
import { CreateTodoItemDto } from './dto/create-todo-item.dto';
import { UpdateTodoItemDto } from './dto/update-todo-item.dto';
import { TodoItem } from './entities/todo-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class TodoItemsService {

    constructor(
        @InjectRepository(TodoItem)
        private todoItemsRepository: Repository<TodoItem>,
        private dataSource: DataSource
    ) { }

    async create(item: CreateTodoItemDto) {
        console.dir(item);
        const newItem = this.todoItemsRepository.create(item);
        await this.todoItemsRepository.save(newItem);

        // // DataSource approach:
        // const newItem = new TodoItem();
        // newItem.text = item.text;
        // newItem.priority = item.priority;
        // this.dataSource.manager.save(newItem);
        
        return newItem;
    }

    findAll() {
        return this.todoItemsRepository.find();
    }

    findOne(id: number) {
        return this.todoItemsRepository.findOneBy({id});
    }

    update(id: number, updateTodoItemDto: UpdateTodoItemDto) {
        return `This action updates a #${id} todoItem`;
    }

    remove(id: number) {
        return `This action removes a #${id} todoItem`;
    }
}
