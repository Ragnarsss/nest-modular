import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { HttpService } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

const API_KEY = 'ASDASD';
const API_KEY_S = 'ASDdasasdASD';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_S : API_KEY,
    },
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const request = http.get('http://jsonplaceholder.typicode.com/todos');
        const tasks = await lastValueOf('request');
        return tasks.data;
      },
    },
  ],
})
export class AppModule {}
