import { Module } from '@nestjs/common';
import { BlogService } from './blog.service.js';
import { BlogController } from './blog.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity.js';
import { TypeORMConfig } from '../config/TypeORM.db.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([Blog]),
  ],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
