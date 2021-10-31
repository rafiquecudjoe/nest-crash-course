import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {

    @Get()
    getTeachers() {
        return "Get Teacher"
    }
   
    @Get('/:teacherId')
    getTeacherById() {
        return "Get Teacher by Id"
    }

  


}
