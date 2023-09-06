import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private readonly couserService: CoursesService) { }

    @Get()
    findAll(@Res() response) {
        return response.status(200).send("Listagem de cursos.") // Semi dinamico.
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `Curso #${id}`
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT) // Estatico.
    create(@Body('name') body) {
        return body
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return `Atualização do Curso #${id}`
    }


    @Delete(':id')
    remove(@Param('id') id: string) {
        return `Deletando o curso #${id}`
    }
}
