import PostEntity from "src/posts/post.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TodoItem {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public text: string;

    @Column()
    public priority: number;

    @ManyToOne(() => PostEntity, (post) => post.todos)
    public post: PostEntity;
}
