import { Job } from './job.js';
import { JobService } from './job-service.js';

describe('Job', () => {
    it('should create a new job', () => {
        const job = new Job({
            name: 'Test Job',
            schedule: '* * * * *',
            command: 'echo "Hello World!"'
        });

        expect(job.name).toBe('Test Job');
        expect(job.schedule).toBe('* * * * *');
        expect(job.command).toBe('echo "Hello World!"');
    });

    it('should validate a job', () => {
        const job = new Job({
            name: 'Test Job',
            schedule: '* * * * *',
            command: 'echo "Hello World!"'
        });

        expect(job.isValid()).toBe(true);
    });

    it('should not validate an invalid job', () => {
        const job = new Job({
            name: '',
            schedule: '* * * * *',
            command: 'echo "Hello World!"'
        });

        expect(job.isValid()).toBe(false);
    });
});

describe('JobService', () => {
    it('should get a list of jobs', () => {
        const jobService = new JobService();

        return jobService.getJobs().then((jobs) => {
            expect(jobs).toBeInstanceOf(Array);
        });
    });

    it('should create a new job', () => {
        const jobService = new JobService();
        const job = new Job({
            name: 'Test Job',
            schedule: '* * * * *',
            command: 'echo "Hello World!"'
        });

        return jobService.createJob(job).then((response) => {
            expect(response).toBeInstanceOf(Object);
        });
    });
});