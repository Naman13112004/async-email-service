import { Queue } from 'bullmq';

// Create a new connection in every instance
export const emailQueue = new Queue('emailQueue', {
    connection: {
        host: "localhost",
        port: 6379,
    }
});