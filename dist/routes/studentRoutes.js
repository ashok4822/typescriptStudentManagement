"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studentController_1 = require("../controllers/studentController");
const studentService_1 = require("../services/studentService");
// express router
const router = express_1.default.Router();
// Create an instance of StudentService
const studentService = new studentService_1.StudentService();
// Inject the StudentService instance into the StudentController
const studentController = new studentController_1.StudentController(studentService); //^Inject the service into the controller (Dependency Injection)
// Routes
router.get('/', (req, res) => studentController.getAllStudents(req, res));
router.post('/', (req, res) => studentController.createStudent(req, res));
router.get('/:id', (req, res) => studentController.getStudentById(req, res));
router.put('/:id', (req, res) => studentController.updateStudent(req, res));
router.delete('/:id', (req, res) => studentController.deleteStudent(req, res));
exports.default = router;
