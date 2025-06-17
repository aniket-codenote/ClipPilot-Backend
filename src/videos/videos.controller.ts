import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { VideoService } from '../video.service';
import { Video, Prisma } from '@prisma/client';

@Controller('videos')
export class VideosController {
  constructor(private readonly videoService: VideoService) {}

  @Get()
  async findAll(): Promise<Video[]> {
    return this.videoService.videos({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Video | null> {
    return this.videoService.video({ id });
  }

  @Post()
  async create(@Body() videoData: Prisma.VideoCreateInput): Promise<Video> {
    return this.videoService.createVideo(videoData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() videoData: Prisma.VideoUpdateInput,
  ): Promise<Video> {
    return this.videoService.updateVideo({
      where: { id },
      data: videoData,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Video> {
    return this.videoService.deleteVideo({ id });
  }
}
