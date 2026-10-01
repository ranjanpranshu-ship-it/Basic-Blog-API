import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfig } from './config/TypeORM.db.js';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
@Module({
  imports: [BlogModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeORMConfig,
    }),
  ],
})
export class AppModule {}
