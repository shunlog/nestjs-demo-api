import { TodoItem } from 'src/todo-items/entities/todo-item.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
export default class PostEntity {
    @PrimaryGeneratedColumn()
    public id: number;
 
    @Column()
    public title: string;
 
    @Column()
    public content: string;

    @OneToMany(() => TodoItem, (todo) => todo.post)
    public todos: TodoItem[];
}
 
