import express from "express";
import blogRoutes from "./routes/blog.api.routes.js";
import cors from "cors"

const app = express();

const port = 3500;

app.use(cors()); // Allow frontend to access backend
// app.use(cors({ origin: "http://localhost:5174" })) // Allow frontend to access backend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/posts", blogRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the full-stack blog website")
})

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
