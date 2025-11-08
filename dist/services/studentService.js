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
exports.StudentService = void 0;
const student_1 = require("../models/student");
// student service class to handle all the business logic related to student meaning CRUD operations
class StudentService {
    // get all students
    getAllStudents() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield student_1.Student.find();
        });
    }
    // get student by id
    getStudentsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield student_1.Student.findById(id);
        });
    }
    // create student
    createStudent(studentData) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = new student_1.Student(studentData);
            return yield student.save();
        });
    }
    // update student
    updateStudent(id, updateStudent) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield student_1.Student.findByIdAndUpdate(id, updateStudent, { new: true });
        });
    }
    // delete student
    deleteStudent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield student_1.Student.findByIdAndDelete(id);
            return result !== null;
        });
    }
}
exports.StudentService = StudentService;
