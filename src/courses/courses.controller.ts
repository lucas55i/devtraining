import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

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
}
