import { Global, Module } from '@nestjs/common';

const API_KEY = 'ASDASD';
const API_KEY_S = 'ASDdasasdASD';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_S : API_KEY,
    },
  ],
  exports: [API_KEY],
})
export class DatabaseModule {}
