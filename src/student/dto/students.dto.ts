
export class FindStudentsResponseDto {
    id: string;
    name: string;
    teacher:string

}
export class StudentsResponseDto {
    id: string;
    name: string;
    teacher: string

}

export class CreateStudentsDto {
    name: string;
    teacher:string
}

export class UpdateStudentsDto {
    name: string;
    student:string
}