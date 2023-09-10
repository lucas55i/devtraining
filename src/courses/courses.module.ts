import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { TagEntity } from './entities/tag.enity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, TagEntity])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule { }
