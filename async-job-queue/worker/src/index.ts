import { Job, Worker } from "bullmq";
import { delay } from "./util.js";

const worker = new Worker("emailQueue", async (job: Job) => {
    const { email, message } = job.data;

    console.log(`Sending email to ${email}`);
    await delay(10*1000);
    console.log({
        email: email,
        message: message,
    });
    console.log(`Email sent to ${email}`);
}, {
    connection: {
        host: "myredis",
        port: 6379,
    }
})