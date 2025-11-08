import express from 'express'
import  {StudentController} from '../controllers/studentController'
import { StudentService } from '../services/studentService'

// express router
const router = express.Router()

// Create an instance of StudentService
const studentService = new StudentService()   

// Inject the StudentService instance into the StudentController
const studentController = new StudentController(studentService)  //^Inject the service into the controller (Dependency Injection)

// Routes
router.get('/', (req, res) => studentController.getAllStudents(req, res))

router.post('/', (req, res) => studentController.createStudent(req, res))

router.get('/:id', (req, res) => studentController.getStudentById(req, res))

router.put('/:id', (req, res) => studentController.updateStudent(req, res))

router.delete('/:id', (req, res) => studentController.deleteStudent(req, res))

export default router;