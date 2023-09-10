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
        return this.courseRepository.find()
    }

    findOne(id: string) {
        const course = this.courseRepository.findOne(id)
        if (!course) {
            throw new NotFoundException(`Course ID ${id} não existe`)
        }
        return course
    }

    create(createCourseDto: CreateCourseDto) {
        const courses = this.courseRepository.create(createCourseDto);
        return this.courseRepository.save(courses);
    }

    async update(id: string, updateCourseDto: UpdateCourseDto) {
        const course = await this.courseRepository.preload({
            id: +id,
            ...updateCourseDto,
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

}
