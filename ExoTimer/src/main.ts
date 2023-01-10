
const button = document.getElementById('timer') as HTMLButtonElement
const timer = document.getElementById('seconds') as HTMLParagraphElement
const annonceTeams = document.getElementById('teams') as HTMLParagraphElement

let seconds = 60

const interval = setInterval(() => {
  seconds--
  timer.innerText = seconds.toString()
  document.title = `${seconds.toString()} seconds left!`
  if(seconds < 0){
    annonceTeams.innerText = 'Game Over !'
    annonceTeams.style.color = 'white'
    document.body.style.backgroundColor = 'black'
    document.title = 'Game Over !'
    timer.innerText = '0'
    clearInterval(interval)
    return
  }
}, 1000)

button.addEventListener('click', () => {
  const getTeams = setTeams(seconds)
  if(getTeams == 'black'){
    annonceTeams.style.color = 'white'
  }
  annonceTeams.innerText = `You are in the team ${getTeams} !`
  document.body.style.backgroundColor = getTeams
  seconds = 60
  timer.innerText = seconds.toString()
  document.title = 'Restart !'
  console.log(getTeams)
})

function setTeams (timer : number) : string
{
  let colorTeam : string = ''

    if(timer > 50 && timer < 60){
      colorTeam = 'purple'
    }
    if(timer > 40 && timer < 50){
      colorTeam = 'blue'
    }
    if(timer > 20 && timer < 30){
      colorTeam = 'green'
    }
    if(timer > 10 && timer < 20){
      colorTeam = 'yellow'
    }
    if(timer > 0 && timer < 10){
      colorTeam = 'red'
    }
    if(timer == 0){
      colorTeam = 'black'
    }
  return colorTeam
}

export{

}
