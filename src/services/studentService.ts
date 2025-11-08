import {Student, StudentDetail} from '../models/student';

// student service class to handle all the business logic related to student meaning CRUD operations

export class StudentService {

  // get all students
  async getAllStudents(): Promise<StudentDetail[]> {
    return await Student.find()
  }

  // get student by id
  async getStudentsById(id: string): Promise<StudentDetail | null> {
    return await Student.findById(id)
  }

  // create student
  async createStudent(studentData: Partial<StudentDetail>): Promise<StudentDetail> {
  const student = new Student(studentData)
  return await student.save()
  }

  // update student
    async updateStudent(id: string,updateStudent: Partial<StudentDetail>) : Promise<StudentDetail | null> {
    return await Student.findByIdAndUpdate(id,updateStudent, { new: true})
  }

  // delete student
  async deleteStudent(id:string): Promise<boolean> {
    const result = await Student.findByIdAndDelete(id)
    return  result !== null
  }

}