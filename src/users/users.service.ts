import { Injectable } from '@nestjs/common';
import PostEntity from 'src/posts/post.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(private dataSource: DataSource) {}

    async findAll() {
        const savedPosts = await this.dataSource.manager.find(PostEntity)
        console.log("All posts from the db: ", savedPosts)
        return 'Success';
    }

}
