import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import { v2 as cloudinary } from "cloudinary";
import { app, server } from "./socket/socket.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

<<<<<<< HEAD
// Middlewares
app.use(express.json({ limit: "50mb" })); // To parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })); // To parse form data in the req.body
app.use(cookieParser());
=======
// Middlewares => The funcs that run between req and res
app.use(cors({
  origin: 'https://mern-social-media-app-threads-clone.vercel.app',
  credentials: true,
}));

app.use(express.json({ limit: '10mb' })); // Adjust limit as needed
app.use(express.urlencoded({ extended: true, limit: '10mb' })); // Adjust limit as needed
app.use(cookieParser()); //Allow us to get the cookie from req and set the cookie from res

>>>>>>> d1ea470bcc1bf15b57781169efb287c452696049

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/messages", messageRoutes);

// http://localhost:5000 => backend,frontend

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	// react app
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

<<<<<<< HEAD
server.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
=======
server.listen(PORT, ()=>console.log(`Server started at http://localhost:${PORT}`))
>>>>>>> d1ea470bcc1bf15b57781169efb287c452696049
