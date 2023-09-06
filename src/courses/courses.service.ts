import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {

    private courses: Course[] = [
        {
            id: 1,
            name: "Fundamentos do NestJs",
            descripition: "Fundamentos do NestJs",
            tasgs: ["node", "nest"]
        }
    ]

    findAll() {
        return this.courses
    }

    findOne(id: string) {
        return this.courses.find((couser) => couser.id === Number(id));
    }
    
    create(createCourseDto: any) {
        this.courses.push(createCourseDto);
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
