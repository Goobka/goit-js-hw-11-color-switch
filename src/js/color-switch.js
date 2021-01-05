import './refs';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const colorChange = {
  intervalId: null,
  isActive: false,

  randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.intervalId = setInterval(() => {
      refs.body.style.backgroundColor =
        colors[this.randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

refs.startBtn.addEventListener('click', colorChange.start.bind(colorChange));

refs.stopBtn.addEventListener('click', colorChange.stop.bind(colorChange));
