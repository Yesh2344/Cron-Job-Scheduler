import express from 'express';
import cors from 'cors';
import { JobService } from './job-service.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const jobService = new JobService();

app.get('/api/jobs', (req, res) => {
    jobService.getJobs().then((jobs) => {
        res.json(jobs);
    }).catch((error) => {
        res.status(500).json({ error: 'Failed to get jobs' });
    });
});

app.post('/api/jobs', (req, res) => {
    const job = req.body;
    jobService.createJob(job).then((response) => {
        res.json(response);
    }).catch((error) => {
        res.status(400).json({ error: 'Invalid job' });
    });
});

app.get('/api/jobs/:id', (req, res) => {
    const id = req.params.id;
    jobService.getJob(id).then((job) => {
        res.json(job);
    }).catch((error) => {
        res.status(404).json({ error: 'Job not found' });
    });
});

app.put('/api/jobs/:id', (req, res) => {
    const id = req.params.id;
    const job = req.body;
    jobService.updateJob(id, job).then((response) => {
        res.json(response);
    }).catch((error) => {
        res.status(400).json({ error: 'Invalid job' });
    });
});

app.delete('/api/jobs/:id', (req, res) => {
    const id = req.params.id;
    jobService.deleteJob(id).then((response) => {
        res.json(response);
    }).catch((error) => {
        res.status(404).json({ error: 'Job not found' });
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});