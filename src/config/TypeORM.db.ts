import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
@Injectable()
export class TypeORMConfig implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mongodb',
            host: 'localhost',
            port: 27017,
            database: 'personal-blog-api',
            synchronize: true,
            autoLoadEntities: true,
        };
    }
}
