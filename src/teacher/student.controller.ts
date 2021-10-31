import { Controller, Get } from "@nestjs/common";

@Controller('teachers/:teachersId/students')
export class StudentTeacherController{

    @Get()
    getStudents() {
        return "Get all students that Belong to a Teacher"

    }

    @Get('/:studentsId')
    getStudentTeacher(){
         return "Update Students Teacher"
    }
}