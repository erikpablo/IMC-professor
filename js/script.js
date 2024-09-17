import { modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { IMC, notANumber } from './utils.js'


// variaveis 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// objeto literal


form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }
    
    AlertError.close()

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    modal.message.innerText = message
    modal.open()
}

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()