import express from 'express'
import studentRoutes from './routes/studentRoutes'
import connectDb from './config/database'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080

connectDb()

app.use(express.json())


app.use('/students',studentRoutes)


app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
})




