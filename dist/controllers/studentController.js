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
// student controller class to handle all the routes related to student
class StudentController {
    // constructor to inject the service into the controller
    constructor(studentService) {
        this.studentService = studentService;
    }
    // get all students
    getAllStudents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const students = yield this.studentService.getAllStudents();
                if (students) {
                    res.status(200).json({ message: 'Students fetched successfully', students });
                }
                else {
                    res.status(404).json({ message: 'Students not found' });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'failed to fetch students', error });
            }
        });
    }
    // get student by id
    getStudentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield this.studentService.getStudentsById(req.params.id);
                if (student) {
                    res.status(200).json({ message: 'Student fetched successfully', student });
                }
                else {
                    res.status(404).json({ message: 'student not found' });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'failed to fetch data', error });
            }
        });
    }
    // create student
    createStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield this.studentService.createStudent(req.body);
                res.status(200).json({ message: 'Student created successfully', student });
            }
            catch (error) {
                res.status(500).json({ message: 'failed to create student', error });
            }
        });
    }
    // update student
    updateStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield this.studentService.updateStudent(req.params.id, req.body);
                console.log(req.params.id, req.body);
                if (student) {
                    res.status(200).json({ message: 'Student updated successfully', student });
                }
                else {
                    res.status(404).json({ message: 'Student not Found' });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to update Student', error });
            }
        });
    }
    // delete student
    deleteStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isDeleted = yield this.studentService.deleteStudent(req.params.id);
                if (isDeleted) {
                    res.status(200).json({ message: 'Student deleted successfully' });
                }
                else {
                    res.status(404).json({ message: 'Student not found' });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to delete Student', error });
            }
        });
    }
}
exports.StudentController = StudentController;
