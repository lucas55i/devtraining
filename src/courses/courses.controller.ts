import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private readonly couserService: CoursesService) { }

    @Get()
    findAll() {
        return this.couserService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.couserService.findOne(id)
    }

    @Post()
    create(@Body() body) {
        return this.couserService.create(body)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return this.couserService.update(id, body)
    }


    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.couserService.remove(id)
    }
}
