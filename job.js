class Job {
    constructor({ name, schedule, command }) {
        this.name = name;
        this.schedule = schedule;
        this.command = command;
    }

    isValid() {
        return this.name && this.schedule && this.command;
    }
}

export { Job };