import moment from "moment"
import { test } from "./fetch"

const app = document.getElementById('horloge') as HTMLDivElement
const stopButton = document.getElementById('button') as HTMLButtonElement

let intervalId: number

function start() {
    intervalId = window.setInterval(() => {
        app.innerText = moment().format('HH:mm:ss')
    }, 1000)
}

function stop() 
{
    window.clearInterval(intervalId)
    stopButton.innerText = 'Resume'
    stopButton.classList.replace('stop', 'resume')
}

function resume() 
{
  stopButton.innerText = 'Stop'
  stopButton.classList.replace('resume', 'stop')
  start()
}

stopButton.addEventListener('click', () => {
    if (stopButton.classList.contains('stop')) {
        stop()
    } else {
        resume()
    }
});

/* (async () => {
  await test
})() */


start()


