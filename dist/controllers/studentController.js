"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    // Get all students
    getAllStudents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const students = yield this.studentService.getAllStudents();
                const response = {
                    success: true,
                    message: "Students fetched successfully",
                    data: students,
                };
                res.status(200).json(response);
            }
            catch (error) {
                const response = {
                    success: false,
                    message: "Failed to fetch students",
                    error,
                };
                res.status(500).json(response);
            }
        });
    }
    // Get student by ID
    getStudentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield this.studentService.getStudentsById(req.params.id);
                if (!student) {
                    res.status(404).json({ success: false, message: "Student not found" });
                    return;
                }
                const response = {
                    success: true,
                    message: "Student fetched successfully",
                    data: student,
                };
                res.status(200).json(response);
            }
            catch (error) {
                res
                    .status(500)
                    .json({ success: false, message: "Failed to fetch student", error });
            }
        });
    }
    // Create student
    createStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield this.studentService.createStudent(req.body);
                const response = {
                    success: true,
                    message: "Student created successfully",
                    data: student,
                };
                res.status(201).json(response);
            }
            catch (error) {
                res
                    .status(500)
                    .json({ success: false, message: "Failed to create student", error });
            }
        });
    }
    // Update student
    updateStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield this.studentService.updateStudent(req.params.id, req.body);
                if (!student) {
                    res.status(404).json({ success: false, message: "Student not found" });
                    return;
                }
                const response = {
                    success: true,
                    message: "Student updated successfully",
                    data: student,
                };
                res.status(200).json(response);
            }
            catch (error) {
                res
                    .status(500)
                    .json({ success: false, message: "Failed to update student", error });
            }
        });
    }
    // Delete student
    deleteStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isDeleted = yield this.studentService.deleteStudent(req.params.id);
                if (isDeleted) {
                    res
                        .status(200)
                        .json({ success: true, message: "Student deleted successfully" });
                }
                else {
                    res.status(404).json({ success: false, message: "Student not found" });
                }
            }
            catch (error) {
                res
                    .status(500)
                    .json({ success: false, message: "Failed to delete student", error });
            }
        });
    }
}
exports.StudentController = StudentController;
