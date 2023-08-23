import { listImgAndAudio } from "./list-img-and-audio.js"

document.querySelectorAll('.image').forEach(element => {
    element.addEventListener('mouseover', () => {
        if (element.classList.contains(1)) {
            element.src = listImgAndAudio[0].Gundyr2
        }else if(element.classList.contains(2)){
            element.src = listImgAndAudio[1].Namless2
        }else if(element.classList.contains(3)){
            element.src = listImgAndAudio[2].Sif2
        }else if(element.classList.contains(4)){
            element.src = listImgAndAudio[3].Soul_of_Cinder2
        }else if(element.classList.contains(5)){
            element.src = listImgAndAudio[4].Yhorm2
        }else if(element.classList.contains(6)){
            element.src = listImgAndAudio[5].Abyss2
        }else if(element.classList.contains(7)){
            element.src = listImgAndAudio[6].Ancient_Dragon2
        }else if(element.classList.contains(8)){
            element.src = listImgAndAudio[7].Four_Kings2
        }else if(element.classList.contains(9)){
            element.src = listImgAndAudio[8].Gael2
        }else if(element.classList.contains(10)){
            element.src = listImgAndAudio[9].Gwyn2
        }else if(element.classList.contains(11)){
            element.src = listImgAndAudio[10].Nito2
        }else if(element.classList.contains(12)){
            element.src = listImgAndAudio[11].Pontfice2
        }else if(element.classList.contains(13)){
            element.src = listImgAndAudio[12].Matheus2
        }else if(element.classList.contains(14)){
            element.src = listImgAndAudio[13].Dudu2
        }
    })
    element.addEventListener('mouseout', () => {
        if (element.classList.contains(1)) {
            element.src = listImgAndAudio[0].Gundyr
        }else if(element.classList.contains(2)){
            element.src = listImgAndAudio[1].Namless
        }else if(element.classList.contains(3)){
            element.src = listImgAndAudio[2].Sif
        }else if(element.classList.contains(4)){
            element.src = listImgAndAudio[3].Soul_of_Cinder
        }else if(element.classList.contains(5)){
            element.src = listImgAndAudio[4].Yhorm
        }else if(element.classList.contains(6)){
            element.src = listImgAndAudio[5].Abyss
        }else if(element.classList.contains(7)){
            element.src = listImgAndAudio[6].Ancient_Dragon
        }else if(element.classList.contains(8)){
            element.src = listImgAndAudio[7].Four_Kings
        }else if(element.classList.contains(9)){
            element.src = listImgAndAudio[8].Gael
        }else if(element.classList.contains(10)){
            element.src = listImgAndAudio[9].Gwyn
        }else if(element.classList.contains(11)){
            element.src = listImgAndAudio[10].Nito
        }else if(element.classList.contains(12)){
            element.src = listImgAndAudio[11].Pontfice
        }else if(element.classList.contains(13)){
            element.src = listImgAndAudio[12].Matheus
        }else if(element.classList.contains(14)){
            element.src = listImgAndAudio[13].Dudu
        }
    })
});

document.querySelectorAll('.button').forEach(element => {
    element.addEventListener('click', () => {
        if(element.classList.contains(1)){
            new Audio(listImgAndAudio[0].GundyrAudio).play()
        }else if(element.classList.contains(2)){
            new Audio(listImgAndAudio[1].NamlessAudio).play()
        }else if(element.classList.contains(3)){
            new Audio(listImgAndAudio[2].SifAudio).play()
        }else if(element.classList.contains(4)){
            new Audio(listImgAndAudio[3].Soul_of_CinderAudio).play()
        }else if(element.classList.contains(5)){
            new Audio(listImgAndAudio[4].YhormAudio).play()
        }else if(element.classList.contains(6)){
            new Audio(listImgAndAudio[5].AbyssAudio).play()
        }else if(element.classList.contains(7)){
            new Audio(listImgAndAudio[6].Ancient_DragonAudio).play()
        }else if(element.classList.contains(8)){
            new Audio(listImgAndAudio[7].Four_KingsAudio).play()
        }else if(element.classList.contains(9)){
            new Audio(listImgAndAudio[8].GaelAudio).play()
        }else if(element.classList.contains(10)){
            new Audio(listImgAndAudio[9].GwynAudio).play()
        }else if(element.classList.contains(11)){
            new Audio(listImgAndAudio[10].NitoAudio).play()
        }else if(element.classList.contains(12)){
            new Audio(listImgAndAudio[11].PontficeAudio).play()
        }
    })
})

const hamburguer = document.querySelector('#menu-bar')
const menu = document.querySelector('.menu')
const body = document.querySelector('#body')

body.addEventListener('click', () => {
    if(hamburguer.contains(event.target)){
        menu.classList.toggle('change-btn')
        document.querySelector('#bar1').classList.toggle('bar1-x')
        document.querySelector('#bar2').classList.toggle('bar2-x')
        document.querySelector('#bar3').classList.toggle('bar3-x')
        
    }else{
        menu.classList.remove('change-btn')
        document.querySelector('#bar1').classList.remove('bar1-x')
        document.querySelector('#bar2').classList.remove('bar2-x')
        document.querySelector('#bar3').classList.remove('bar3-x')
    }
})