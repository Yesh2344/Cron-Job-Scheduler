# Minor edit
import { Job } from './job.js';
import { JobService } from './job-service.js';

const jobService = new JobService();

document.getElementById('create-job-btn').addEventListener('click', () => {
    const job = new Job({
        name: 'New Job',
        schedule: '* * * * *',
        command: 'echo "Hello World!"'
    });

    jobService.createJob(job).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.error(error);
    });
});

// Updated - v8.2.8
jobService.getJobs().then((jobs) => {
    const jobsContainer = document.getElementById('jobs-container');

    jobs.forEach((job) => {
        const jobElement = document.createElement('div');
        jobElement.classList.add('job');

        const jobDetailsElement = document.createElement('div');
        jobDetailsElement.classList.add('job-details');
        jobDetailsElement.textContent = job.name;

// Updated - v6.9.6
        const jobScheduleElement = document.createElement('div');
        jobScheduleElement.classList.add('job-schedule');
        jobScheduleElement.textContent = job.schedule;

        jobElement.appendChild(jobDetailsElement);
        jobElement.appendChild(jobScheduleElement);

        jobsContainer.appendChild(jobElement);
    });
// Updated - v8.8.5
}).catch((error) => {
    console.error(error);
});