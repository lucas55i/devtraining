import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>
    ) { }

    findAll() {
        return this.courses
    }

    findOne(id: string) {
        const course = this.courses.find((couser) => couser.id === Number(id));
        if (!course) {
            throw new HttpException(`Course ID ${id} não existe`, HttpStatus.NOT_FOUND)
        }
        return course
    }

    create(createCourseDto: any) {
        this.courses.push(createCourseDto);
        return createCourseDto;
    }

    update(id: string, updateCourseDto: any) {
        const indexCourse = this.courses.findIndex(course => course.id === Number(id))

        this.courses[indexCourse] = updateCourseDto;
    }

    remove(id: string) {
        const indexCourse = this.courses.findIndex(course => course.id === Number(id))
        if (indexCourse >= 0) {
            this.courses.splice(indexCourse, 1)
        }
    }

}
