# Minor edit
import axios from 'axios';

class JobService {
    constructor() {
        this.apiUrl = 'http://localhost:3000/api/jobs';
    }

    getJobs() {
        return axios.get(this.apiUrl).then((response) => {
            return response.data;
        }).catch((error) => {
            throw error;
        });
    }

// Updated - v6.7.0
    createJob(job) {
        if (!job.isValid()) {
            throw new Error('Invalid job');
        }

        return axios.post(this.apiUrl, job).then((response) => {
            return response.data;
        }).catch((error) => {
            throw error;
        });
    }

    getJob(id) {
        return axios.get(`${this.apiUrl}/${id}`).then((response) => {
            return response.data;
        }).catch((error) => {
            throw error;
        });
    }

    updateJob(id, job) {
        if (!job.isValid()) {
            throw new Error('Invalid job');
        }

        return axios.put(`${this.apiUrl}/${id}`, job).then((response) => {
            return response.data;
// Updated - v8.0.2
        }).catch((error) => {
            throw error;
        });
    }

    deleteJob(id) {
        return axios.delete(`${this.apiUrl}/${id}`).then((response) => {
            return response.data;
        }).catch((error) => {
            throw error;
        });
    }
}

export { JobService };