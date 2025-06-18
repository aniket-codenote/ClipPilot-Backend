import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Video, Prisma } from '@prisma/client';

type VideoQueryParams = Partial<Prisma.VideoFindManyArgs>;

type UpdateVideoParams = {
  where: Prisma.VideoWhereUniqueInput;
  data: Prisma.VideoUpdateInput;
};

@Injectable()
export class VideoService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(where: Prisma.VideoWhereUniqueInput): Promise<Video | null> {
    return this.prisma.video.findUnique({ where });
  }

  async findAll(params: VideoQueryParams = {}): Promise<Video[]> {
    return this.prisma.video.findMany(params);
  }

  async create(data: Prisma.VideoCreateInput): Promise<Video> {
    return this.prisma.video.create({ data });
  }

  async update({ where, data }: UpdateVideoParams): Promise<Video> {
    return this.prisma.video.update({ where, data });
  }

  async delete(where: Prisma.VideoWhereUniqueInput): Promise<Video> {
    return this.prisma.video.delete({ where });
  }
}
