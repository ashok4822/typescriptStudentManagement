import { Student, StudentDetail } from "../models/student";
import {
  CreateStudentRequest,
  UpdateStudentRequest,
} from "../models/requestResponseModels/studentRequest";
import { StudentResponse } from "../models/requestResponseModels/studentResponse";

// student service class to handle all the business logic related to students
export class StudentService {
  // Convert database document to response DTO
  private mapToResponse(student: StudentDetail): StudentResponse {
    return {
      id: student._id.toString(),
      name: student.name,
      age: student.age,
      place: student.place,
    };
  }

  // get all students
  async getAllStudents(): Promise<StudentResponse[]> {
    const students = await Student.find();
    return students.map((s) => this.mapToResponse(s));
  }

  // get student by id
  async getStudentsById(id: string): Promise<StudentResponse | null> {
    const student = await Student.findById(id);
    return student ? this.mapToResponse(student) : null;
  }

  // create student
  async createStudent(
    studentData: CreateStudentRequest
  ): Promise<StudentResponse> {
    const student = new Student(studentData);
    const saved = await student.save();
    return this.mapToResponse(saved);
  }

  // update student
  async updateStudent(
    id: string,
    updateStudent: UpdateStudentRequest
  ): Promise<StudentResponse | null> {
    const updated = await Student.findByIdAndUpdate(id, updateStudent, {
      new: true,
    });
    return updated ? this.mapToResponse(updated) : null;
  }

  // delete student
  async deleteStudent(id: string): Promise<boolean> {
    const result = await Student.findByIdAndDelete(id);
    return result !== null;
  }
}
