import { Queue } from 'bullmq';

// Create a new connection in every instance
export const emailQueue = new Queue('emailQueue', {
    connection: {
        host: "myredis",
        port: 6379,
    }
});