const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonLess = document.querySelector('.less')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const dotsDisplay = document.querySelector('.two-dots')
const pageDisplay = document.querySelector('.page')

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')
const buttonFirePlace = document.querySelector('.fireplace')

const buttonLightMode = document.querySelector('.light-mode')
const buttonDarkMode = document.querySelector('.dark-mode')

const pressAudioForest = new Audio("https://github.com/Alexxcamargo1000/focus-timer/blob/main/audios/Floresta.wav?raw=true")

const pressAudioRain = new Audio("https://github.com/Alexxcamargo1000/focus-timer/blob/main/audios/Chuva.wav?raw=true")

const pressAudioCoffe = new Audio("https://github.com/Alexxcamargo1000/focus-timer/blob/main/audios/Cafeteria.wav?raw=true")

const pressAudioFirePlace = new Audio("https://github.com/Alexxcamargo1000/focus-timer/blob/main/audios/Lareira.wav?raw=true")


let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)
let timerTimeout

function updateDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2,'0')
    secondsDisplay.textContent = String(seconds).padStart(2,'0')
}

function countDown(){
    timerTimeout = setTimeout(()=>{
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0

        if(isFinished){
            return
        }

        if(seconds <=0){
            seconds = 60
            --minutes
        }

        updateDisplay(minutes, String(seconds - 1))
    
        countDown()
        
    },1000)
}

function plusFive(){
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    minutes += 5
    seconds
    updateDisplay(minutes, seconds)

}

function lessFive(){
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    minutes -= 5
    seconds
    updateDisplay(minutes, seconds)
}

// MUDAR PAGINA PARA ESCURO
function changeModeToDark(){
    buttonLightMode.classList.add('hide')
    buttonDarkMode.classList.remove('hide')

    pageDisplay.classList.add('change-color-bg-page')
}

function changeColorSoundsToDark(){
    buttonForest.classList.remove('change-color-bg')
    buttonForest.classList.add('change-color-mode-bg')
    buttonForest.classList.add('change-color-sounds-tx')

    buttonRain.classList.remove('change-color-bg')
    buttonRain.classList.add('change-color-mode-bg')
    buttonRain.classList.add('change-color-sounds-tx')

    buttonCoffee.classList.remove('change-color-bg')
    buttonCoffee.classList.add('change-color-mode-bg')
    buttonCoffee.classList.add('change-color-sounds-tx')

    buttonFirePlace.classList.remove('change-color-bg')
    buttonFirePlace.classList.add('change-color-mode-bg')
    buttonFirePlace.classList.add('change-color-sounds-tx')
}

function changeColorSoundsToDarkFocus(){
    buttonForest.classList.add('change-color-mode')
    
    buttonRain.classList.add('change-color-mode')

    buttonCoffee.classList.add('change-color-mode')
    
    buttonFirePlace.classList.add('change-color-mode')
}

function changeColorStopWatchToDark(){
    minutesDisplay.classList.add('change-color-timer')
    secondsDisplay.classList.add('change-color-timer')
    dotsDisplay.classList.add('change-color-timer')
    buttonPlay.classList.add('change-color-controls-tx')
    buttonStop.classList.add('change-color-controls-tx')
    buttonPlus.classList.add('change-color-controls-tx')
    buttonLess.classList.add('change-color-controls-tx')
}

// MUDAR PAGINA PARA CLARO
function changeModeToLight(){
    buttonDarkMode.classList.add('hide')
    buttonLightMode.classList.remove('hide')

    pageDisplay.classList.remove('change-color-bg-page')
}

function changeColorSoundsToLight(){
    buttonForest.classList.add('change-color-bg')
    buttonForest.classList.remove('change-color-mode-bg')
    buttonForest.classList.remove('change-color-sounds-tx')

    buttonRain.classList.add('change-color-bg')
    buttonRain.classList.remove('change-color-mode-bg')
    buttonRain.classList.remove('change-color-sounds-tx')

    buttonCoffee.classList.add('change-color-bg')
    buttonCoffee.classList.remove('change-color-mode-bg')
    buttonCoffee.classList.remove('change-color-sounds-tx')

    buttonFirePlace.classList.add('change-color-bg')
    buttonFirePlace.classList.remove('change-color-mode-bg')
    buttonFirePlace.classList.remove('change-color-sounds-tx')
}

function changeColorSoundsToLightFocus(){
    buttonForest.classList.remove('change-color-mode')

    buttonRain.classList.remove('change-color-mode')

    buttonCoffee.classList.remove('change-color-mode')
    
    buttonFirePlace.classList.remove('change-color-mode')
}

function changeColorStopWatchToLight(){
    minutesDisplay.classList.remove('change-color-timer')
    secondsDisplay.classList.remove('change-color-timer')
    dotsDisplay.classList.remove('change-color-timer')
    buttonPlay.classList.remove('change-color-controls-tx')
    buttonStop.classList.remove('change-color-controls-tx')
    buttonPlus.classList.remove('change-color-controls-tx')
    buttonLess.classList.remove('change-color-controls-tx')
}


buttonPlay.addEventListener('click', ()=>{
    countDown()
})

buttonStop.addEventListener('click', ()=>{
    clearTimeout(timerTimeout)
})

buttonPlus.addEventListener('click',()=>{
    plusFive()
})

buttonLess.addEventListener('click',()=>{
    lessFive()
})

buttonForest.addEventListener('click',()=>{
    pressAudioForest.play()
})

buttonRain.addEventListener('click',()=>{
    pressAudioRain.play()
})

buttonCoffee.addEventListener('click',()=>{
    pressAudioCoffe.play()
})

buttonFirePlace.addEventListener('click',()=>{
    pressAudioFirePlace.play()
})

buttonLightMode.addEventListener('click',()=>{
    changeModeToDark()
    changeColorSoundsToDark()
    changeColorSoundsToDarkFocus()
    changeColorStopWatchToDark()
})

buttonDarkMode.addEventListener('click',()=>{
    changeModeToLight()
    changeColorSoundsToLight()
    changeColorSoundsToLightFocus()
    changeColorStopWatchToLight()
})
