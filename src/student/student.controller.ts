import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {

    @Get()
    getStudents() {
        return "All Students"
    }

    @Get('/:studentId')
    getStudentById(
        @Param('studentId') studentId: string
    ) {

        return `Get Student by Id ${studentId}`

    }

    @Post()
    createStudent(
        @Body() body
    ) {

        return "Create student"
    }

    @Put('/:studentId')
    updateStudent() {
        return "Update Student by ID"
    }





}

