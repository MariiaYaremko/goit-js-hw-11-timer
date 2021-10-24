class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.intervalId = null;
    this.element = document.querySelector(selector);
    this.targetDate = targetDate;
    this.start();
  }

  start() {
    this.intervalId = setInterval(() => {
      const startTime = Date.now();
      const diffTime = this.targetDate - startTime;
      const time = this.getTimeComponents(diffTime);
      this.showDate(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  showDate({ days, hours, mins, secs }) {
    this.element.querySelector('[data-value = "days"]').textContent = days;
    this.element.querySelector('[data-value = "hours"]').textContent = hours;
    this.element.querySelector('[data-value = "mins"]').textContent = mins;
    this.element.querySelector('[data-value = "secs"]').textContent = secs;
  }
}

const NewYearTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 01, 2022 00:00:00"),
});
