'use strict'

import './style.css'
import { Ecommands, isUndefinedOrNull, convertTocommands } from './commands'
import * as tauri from 'tauri/api/tauri'

const submitbtn = document.querySelector('button') as HTMLButtonElement
const selectCommands = document.querySelector('select') as HTMLSelectElement
const textArea = document.querySelector('textarea')  as HTMLTextAreaElement
  


const getSelectedvalue = function(): Ecommands{
    const values = selectCommands.options[selectCommands.selectedIndex].value
    if (isUndefinedOrNull(values))
        return Ecommands.null
    else{
        return (values.toString().toUpperCase() as unknown) as Ecommands 
    }    
}

submitbtn?.addEventListener('click',(event: Event)=> {
    event.preventDefault()
    const selected = getSelectedvalue()
    textArea.value = ''
    if (selected == Ecommands.null){
        textArea.value = 'Select A command from Dropdown'
        textArea.style.color = '#FF0000'
    } else {
        tauri.promisified({cmd: convertTocommands(selected)}).then((value)=> {
            textArea.value = value as string
            textArea.style.color = '#000000'
        }).catch((e )=> {
            textArea.value = e as string
            textArea.style.color = '#FF0000'
        })
    }
    
})
