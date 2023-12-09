
import express from 'express';
import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();

import authRouter from './routes/auth.mjs'
import commentRouter from './routes/comment.mjs'
import feedRouter from './routes/feed.mjs'
import postRouter from './routes/post.mjs'

// import mongoose from 'mongodb'


const app = express();
app.use(express.json()); // body parser
app.use(cors(
// {
//     origin: ["https://deploy-mern-.vecel.app"],
//     methods:["POST","GET"],
//     credentials:true
// }
    ))
    // const connectDB = async () => {
    //     try {
    //       await mongoose.connect('mongoose.connect(`mongodb+srv://hamzaabdulmajeed863:mhamzaee1@cluster0.xkuy2mb.mongodb.net/cruddb?retryWrites=true&w=majority`)', {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //       });
    //       console.log('Connected to MongoDB');
    //     } catch (error) {
    //       console.error('Error connecting to MongoDB:', error.message);
    //     }
    //   };
      
    //   // Call the connectDB function to establish the connection
    //   connectDB();
    
    

// /api/v1/login
app.use("/api/v1", authRouter)

app.use((req, res, next) => { // JWT
    let token = "valid"
    if (token === "valid") {
        next();
    } else {
        res.status(401).send({ message: "invalid token" })
    }
})

app.use("/api/v1", postRouter) // Secure api




//     /static/vscode_windows.exe
app.use("/static", express.static(path.join(__dirname, 'static')))

app.use(express.static(path.join(__dirname, 'static')))

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})