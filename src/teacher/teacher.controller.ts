import { Controller, Get, Param, Put } from '@nestjs/common';
import { FindStudentsResponseDto } from 'src/student/dto/students.dto';
import { TeacherResponseDto } from './dto/teacher.dto';

@Controller('teachers')
export class TeacherController {

    @Get()
    getTeachers():FindStudentsResponseDto[] {
        return []
    }
   
    @Get('/:teacherId')
    getTeacherById(
        @Param('teacherId') teacherId:string
    ):TeacherResponseDto {
        return 
    }

  


}
