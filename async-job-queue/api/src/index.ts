import express from "express";
import { emailQueue } from "./queue.js";


const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.send("This API is working perfectly...");
});

app.post("/task", async (req, res) => {
    const { email, message } = req.body;

    await emailQueue.add("email", {
        "email": email,
        "message": message,
        "timestamp": new Date().toLocaleString()
    }, { 
        removeOnComplete: true,
        removeOnFail: true,
    });
    
    const count = await emailQueue.count();

    res.json({
        status: "job queued",
        countOfRemainingJobs: count,
    });
});

app.listen(3000, () => {
    console.log("API running on port 3000...");
})