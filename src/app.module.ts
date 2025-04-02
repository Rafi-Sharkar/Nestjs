import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PostController } from './posts.controller';
import { TwitesController } from './twites.controller';

@Module({
  imports: [],
  controllers: [UsersController, PostController, TwitesController],
  providers: [],
})
export class AppModule {}
