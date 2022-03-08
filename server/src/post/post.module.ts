import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostRepository } from './post.repository';
import { ReplyLogRepository } from './reply.repository';
import { UserRepository } from 'src/auth/user.repository';
import { UserService } from 'src/auth/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PostRepository,
      ReplyLogRepository,
      UserRepository,
    ]),
  ],
  controllers: [PostController],
  providers: [PostService, UserService],
})
export class PostModule {}
