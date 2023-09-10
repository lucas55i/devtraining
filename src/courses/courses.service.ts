import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './entities/course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { TagEntity } from './entities/tag.enity';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>,

        @InjectRepository(TagEntity)
        private readonly tagRepository: Repository<TagEntity>
    ) { }

    findAll() {
        return this.courseRepository.find({
            relations: ['tags']
        })
    }

    async findOne(id: string) {
        const course = await this.courseRepository.findOne(id, {
            relations: ["tags"]
        })
        if (!course) {
            throw new NotFoundException(`Course ID ${id} not found`);
          }
      
          return course;
    }

    async create(createCourseDto: CreateCourseDto) {
        const tags = await Promise.all(
            createCourseDto.tags.map(name => this.preloadTagByName(name))
        )
        const courses = this.courseRepository.create({
            ...createCourseDto,
            tags,
        });
        return this.courseRepository.save(courses);
    }

    async update(id: string, updateCourseDto: UpdateCourseDto) {
        const tags =
            updateCourseDto.tags &&
            (await Promise.all(
                updateCourseDto.tags.map(name => this.preloadTagByName(name))
            ));

        const course = await this.courseRepository.preload({
            id: +id,
            ...updateCourseDto,
            tags,
        })

        if (!course) {
            throw new NotFoundException(`Course ID ${id} não existe`)
        }

        return this.courseRepository.save(course)
    }

    async remove(id: string) {
        const course = await this.courseRepository.findOne(id);

        if (!course) {
            throw new NotFoundException(`Course ID ${id} não existe`)
        }

        return this.courseRepository.remove(course)
    }

    private async preloadTagByName(name: string): Promise<TagEntity> {
        const tag = await this.tagRepository.findOne({ name });

        if (tag) {
            return tag
        }

        return this.tagRepository.create({ name });
    }

}
