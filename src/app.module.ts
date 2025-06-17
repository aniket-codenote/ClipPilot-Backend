import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UserService } from './user.service';
import { VideoService } from './video.service';
import { HealthcheckController } from './healthcheck/healthcheck.controller';
import { VideosController } from './videos/videos.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, HealthcheckController, VideosController, UsersController],
  providers: [AppService, PrismaService, UserService, VideoService],
})
export class AppModule {}
