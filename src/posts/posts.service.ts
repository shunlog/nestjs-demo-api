import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import PostEntity from './post.entity';
import { Repository } from 'typeorm';

export class CreatePostDto {
    content: string;
    title: string;
}

export class UpdatePostDto {
  id: number;
  content: string;
  title: string;
}


@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(PostEntity)
    private postsRepository: Repository<PostEntity>
    ) {}
    

    async getPostById(id: number) {
        const post = await this.postsRepository.findOneBy({id});
        console.dir(post);
        if (post) {
            return post;
        }
        throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }    

    getAllPosts() {
        return this.postsRepository.find();
    }

    async createPost(post: CreatePostDto) {
        const newPost = this.postsRepository.create(post);
        await this.postsRepository.save(newPost);
        return newPost;
    }


    async updatePost(id: number, post: UpdatePostDto) {
        await this.postsRepository.update(id, post);
        const updatedPost = await this.postsRepository.findOneBy({id});
        if (updatedPost) {
            return updatedPost
        }
        throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }

    async deletePost(id: number) {
        const deleteResponse = await this.postsRepository.delete(id);
        if (!deleteResponse.affected) {
            throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
        }
    }
    
}
