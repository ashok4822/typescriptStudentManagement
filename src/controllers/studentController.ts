import { Request, Response } from "express";
import { StudentService } from "../services/studentService";
import {
  CreateStudentRequest,
  UpdateStudentRequest,
} from "../models/requestResponseModels/studentRequest";
import {
  ApiResponse,
  StudentResponse,
} from "../models/requestResponseModels/studentResponse";

export class StudentController {
  private studentService: StudentService;

  constructor(studentService: StudentService) {
    this.studentService = studentService;
  }

  // Get all students
  async getAllStudents(req: Request, res: Response): Promise<void> {
    try {
      const students = await this.studentService.getAllStudents();
      const response: ApiResponse<StudentResponse[]> = {
        success: true,
        message: "Students fetched successfully",
        data: students,
      };
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse<null> = {
        success: false,
        message: "Failed to fetch students",
        error,
      };
      res.status(500).json(response);
    }
  }

  // Get student by ID
  async getStudentById(req: Request, res: Response): Promise<void> {
    try {
      const student = await this.studentService.getStudentsById(req.params.id);
      if (!student) {
        res.status(404).json({ success: false, message: "Student not found" });
        return;
      }

      const response: ApiResponse<StudentResponse> = {
        success: true,
        message: "Student fetched successfully",
        data: student,
      };
      res.status(200).json(response);
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Failed to fetch student", error });
    }
  }

  // Create student
  async createStudent(
    req: Request<{}, {}, CreateStudentRequest>,
    res: Response
  ): Promise<void> {
    try {
      const student = await this.studentService.createStudent(req.body);
      const response: ApiResponse<StudentResponse> = {
        success: true,
        message: "Student created successfully",
        data: student,
      };
      res.status(201).json(response);
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Failed to create student", error });
    }
  }

  // Update student
  async updateStudent(
    req: Request<{ id: string }, {}, UpdateStudentRequest>,
    res: Response
  ): Promise<void> {
    try {
      const student = await this.studentService.updateStudent(
        req.params.id,
        req.body
      );
      if (!student) {
        res.status(404).json({ success: false, message: "Student not found" });
        return;
      }

      const response: ApiResponse<StudentResponse> = {
        success: true,
        message: "Student updated successfully",
        data: student,
      };
      res.status(200).json(response);
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Failed to update student", error });
    }
  }

  // Delete student
  async deleteStudent(
    req: Request<{ id: string }>,
    res: Response
  ): Promise<void> {
    try {
      const isDeleted = await this.studentService.deleteStudent(req.params.id);
      if (isDeleted) {
        res
          .status(200)
          .json({ success: true, message: "Student deleted successfully" });
      } else {
        res.status(404).json({ success: false, message: "Student not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Failed to delete student", error });
    }
  }
}
