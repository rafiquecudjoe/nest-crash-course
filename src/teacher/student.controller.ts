import { Controller, Get, Param } from "@nestjs/common";

@Controller('teachers/:teachersId/students')
export class StudentTeacherController{

    @Get()
    getStudents(
        @Param('teachersId') teachersId: string
    ) {
        return `Get all students that Belong to a Teacher with ${teachersId}`

    }

    @Get('/:studentsId')
    getStudentTeacher(
        @Param('studentsId') studentsId: string,
        @Param('teachersId') teachersId: string
    ){
         return `Update Students Teacher with ${studentsId} and ${teachersId} `
    }
}