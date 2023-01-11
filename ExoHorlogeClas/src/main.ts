import moment from 'moment';

export class Clock {
  public app!: HTMLDivElement; 
  public time!: HTMLDivElement;
  public day!: HTMLDivElement;
  public month!: HTMLDivElement;
  public year!: HTMLDivElement;

  public constructor() {
    this.app = document.querySelector('#app') as HTMLDivElement;
    this.time = document.querySelector('#time') as HTMLDivElement;
    this.day = document.querySelector('#day') as HTMLDivElement;
    this.month = document.querySelector('#month') as HTMLDivElement;
    this.year = document.querySelector('#year') as HTMLDivElement;
  }

  public start() {
    this.update();
    setInterval(() => this.update(), 1000);
  }

  public update() {
    const now = moment();
    this.time.innerText = now.format('HH:mm:ss');
    this.day.innerText = now.format('dddd');
    this.month.innerText = now.format('MMMM');
    this.year.innerText = now.format('YYYY');
  }

  public getHours() : string{
    return this.time.innerText.split(':')[0];
  }

}

const clock = new Clock();
clock.start();
console.log(clock.getHours());

