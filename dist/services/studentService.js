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
// student service class to handle all the business logic related to students
class StudentService {
    // Convert database document to response DTO
    mapToResponse(student) {
        return {
            id: student._id.toString(),
            name: student.name,
            age: student.age,
            place: student.place,
        };
    }
    // get all students
    getAllStudents() {
        return __awaiter(this, void 0, void 0, function* () {
            const students = yield student_1.Student.find();
            return students.map((s) => this.mapToResponse(s));
        });
    }
    // get student by id
    getStudentsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield student_1.Student.findById(id);
            return student ? this.mapToResponse(student) : null;
        });
    }
    // create student
    createStudent(studentData) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = new student_1.Student(studentData);
            const saved = yield student.save();
            return this.mapToResponse(saved);
        });
    }
    // update student
    updateStudent(id, updateStudent) {
        return __awaiter(this, void 0, void 0, function* () {
            const updated = yield student_1.Student.findByIdAndUpdate(id, updateStudent, {
                new: true,
            });
            return updated ? this.mapToResponse(updated) : null;
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
