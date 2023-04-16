import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from './routes';
import authRouter from './routes/auth';

const app = express();
const PORT = process.env.PORT || 3000;
const hostname = "localhost";


//express.static("public") is a built-in middleware function in Express. It serves static files and is based on serve-static.
//app.use(express.static("public")); // static server
app.use("/", router);
app.use('/auth', authRouter);
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });