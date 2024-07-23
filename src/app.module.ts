import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { PostsModule } from './posts/posts.module';
import * as Joi from 'joi';
import { DataSource } from 'typeorm';
import { UsersModule } from './users/users.module';
import { TodoItemsModule } from './todo-items/todo-items.module';


@Module({
    imports: [
        ConfigModule.forRoot({
            validationSchema: Joi.object({
                POSTGRES_HOST: Joi.string().required(),
                POSTGRES_PORT: Joi.number().required(),
                POSTGRES_USER: Joi.string().required(),
                POSTGRES_PASSWORD: Joi.string().required(),
                POSTGRES_DB: Joi.string().required(),
                PORT: Joi.number(),
            })
        }),
        DatabaseModule,
        UsersModule,
        TodoItemsModule,
        PostsModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
 constructor(private dataSource: DataSource) {}
}
