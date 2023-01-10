const rounded = document.getElementsByClassName("ball")[0] as HTMLDivElement
 // initialisation des variables
let mouseX = 0
let mouseY = 0

let ballX = 0
let ballY = 0

// vitesse de déplacement
const speed = 0.15

// récupération de la position de la souris
document.addEventListener("mousemove", (e: MouseEvent) => {
    e.preventDefault()
    mouseX = e.clientX 
    mouseY = e.clientY 
})

// grossissement de la balle
document.addEventListener("mousedown", () => {
    rounded.classList.add("ball--large")
})

// retour à la taille initiale
document.addEventListener("mouseup", () => {
    rounded.classList.remove("ball--large")
})

// deplacement de la balle en fonction de la position de la souris et de la vitesse de deplacement
const animate = () => {

    // distance entre la souris et la balle
    const disX = mouseX - ballX
    const disY = mouseY - ballY

    // deplacement de la balle
    ballX += disX * speed
    ballY += disY * speed

    // positionnement de la balle
    rounded.style.left = `${ballX + disX * speed }px`
    rounded.style.top = `${ballY + disY * speed }px`

    // relance de la fonction toutes les secondes
    requestAnimationFrame(animate)
}

// init animate()
animate()

export{

}