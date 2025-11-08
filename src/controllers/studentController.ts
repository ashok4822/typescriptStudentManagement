import {Request, Response } from 'express'
import { StudentService } from '../services/studentService'

// student controller class to handle all the routes related to student
export class StudentController {
  private studentService: StudentService
  
  // constructor to inject the service into the controller
  constructor(studentService: StudentService) {
    this.studentService = studentService              
  }

  // get all students
  async getAllStudents(req: Request, res: Response): Promise<void> {
    try {
      const students = await this.studentService.getAllStudents()
      if(students) {
        res.status(200).json({message:'Students fetched successfully',students})
      } else {
        res.status(404).json({message:'Students not found'})
      }
    } catch(error) {
      res.status(500).json({message:'failed to fetch students',error})
    
    }
  }

  // get student by id
  async getStudentById(req: Request, res: Response): Promise<void> {
    try {
      const student = await this.studentService.getStudentsById(req.params.id)
      if(student) {
        res.status(200).json({message:'Student fetched successfully',student})
      } else {
        res.status(404).json({message:'student not found'})
      }
    }catch (error) {
      res.status(500).json({message:'failed to fetch data',error})
    }
  }


  // create student
  async createStudent(req: Request, res: Response): Promise<void> {
    try {
      const student = await this.studentService.createStudent(req.body) 
      res.status(200).json({message:'Student created successfully',student})
    } catch(error) {
      res.status(500).json({message:'failed to create student',error})
    }
  }


  // update student
  async updateStudent(req: Request, res: Response): Promise<void> {
    try {
      const student = await this.studentService.updateStudent(req.params.id, req.body)
      console.log(req.params.id,req.body)
      if(student) {
        res.status(200).json({message:'Student updated successfully',student})
      } else {
        res.status(404).json({message:'Student not Found'})
      }
    } catch(error) {
      res.status(500).json({message:'Failed to update Student',error})
    }
  }

  // delete student
  async deleteStudent(req: Request, res: Response) : Promise<void> {
    try {
      const isDeleted = await this.studentService.deleteStudent(req.params.id)
      if(isDeleted) {
        res.status(200).json({message:'Student deleted successfully'})
      } else {
        res.status(404).json({message: 'Student not found'})
      }
    }catch(error) {
      res.status(500).json({message:'Failed to delete Student',error})
    }
  }
}