import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto.js';
import { UpdateBlogDto } from './dto/update-blog.dto.js';
import { Repository } from 'typeorm';
import { Blog } from './entities/blog.entity.js';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>
  ) {}
  create(createBlogDto: CreateBlogDto) {
    return this.blogRepository.save(createBlogDto);
  }

  findAll() {
    return this.blogRepository.find();
  }

  findOne(id: any) {
    return this.blogRepository.findOne({ where: { id } });
  }

  update(id: any, updateBlogDto: UpdateBlogDto) {
    return this.blogRepository.update(id, updateBlogDto);
  }

  remove(id: any) {
    return this.blogRepository.delete(id);
  }
}
