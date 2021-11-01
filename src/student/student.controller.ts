import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateStudentsDto, FindStudentsResponseDto, StudentsResponseDto, UpdateStudentsDto } from './dto/students.dto';

@Controller('students')
export class StudentController {

    @Get()
    getStudents() :FindStudentsResponseDto[] {
        return []
    }

    @Get('/:studentId')
    getStudentById(
        @Param('studentId') studentId: string
    ):FindStudentsResponseDto {

        return 

    }

    @Post()
    createStudent(
        @Body() body: CreateStudentsDto
    ) :StudentsResponseDto {

        return 
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentsId: string,
        @Body() body: UpdateStudentsDto
    ) :StudentsResponseDto {
        console.log(studentsId)
        return 
    }





}

