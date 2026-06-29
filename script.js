// const { createElement } = require("react")

// const para = document.getElementById('para')
// const section = document.getElementById('section')
// const subSection = document.getElementById('subSection')

// // para.textContent = 'javascript'
// para.style.backgroundColor = 'green'
// para.style.color = 'white'
// para.style.padding = '10px'
// para.style.borderRadius = '30px'
// para.style.textAlign = 'center'

// section.innerHTML = '<a href"">home</a>'

// const link = document.createElement('a')
// link.textContent = ('message me on Facebook')
// link.href = ('https://www.facebook.com')
// link.style.color = 'green'
// link.style.textDecoration = 'none'
// subSection.appendChild(link)

// let power = Math.floor(Math.random() * 10000)+1000

// let range = Math.floor(Math.random() *90000000) +1000000

// let min = 10000000
// let max = 99999999
// let me = Math.floor(Math.random()*(max - min + 1)) + min
// console.log(me)

// console.log(range)





// const btn = document.getElementById('btn')
// const content = document.getElementById('content')

// btn.addEventListener('click' , () => {
//     content.classList.toggle("show")
// })


// const para = document.querySelector('.para')
// function show() {
//     para.classList.add('para')
// }

// const btn = document.getElementById('btn')
// const nav = document.querySelector('.nav')
// function show(){
    //     nav.classList.toggle('nav')
    // }
    let sun = document.querySelector('.sun')
    let moon = document.querySelector('.moon')
    let body = document.querySelector('.body')
    let subGame = document.querySelector('.subGame')
    let mode = document.querySelector('.mode')
    let btn = document.querySelector('#btn')
    let link = document.querySelector('.link')


let result = document.getElementById('result')
let limit = document.getElementById('limit')
// let guessCount = document.getElementById('guess')
let count = 0


let max = 30
let min = 10
let secretNumber =  Math.floor(Math.random() * (max - min + 1)  + min);
let maxCount = 5
let gameOver = false

function guess() {
    // if (gameOver) {
    //   return;// stop the function completely  
    // }
    count++

    let input = document.getElementById('input').value

    let userGuess = Number(input)


    if (userGuess === secretNumber) {
       result.textContent = 'Amazing, you guess right🔥'
       
    }
    else if (userGuess > 30) {
        result.textContent = 'You Guess too high above the range😂'
        
    }else if (userGuess < 10) {
        result.textContent = 'You guess below the range'
    }

    else if (userGuess > secretNumber) {
        result.textContent = 'Wrong, Try again'
    }

    else if (userGuess < secretNumber) {
        result.textContent = 'Wrong, try again'
    }
    // else if (userGuess < 10) {
    //     result.textContent = 'You Guess too low below the range💁‍♀️'
    // }
    
    else {
        result.textContent = 'Wrong guess😒, Try again'
    }
    guessCount.textContent = `Your guess count is ${count} `

       
    let btn = document.getElementById('btn')
    let popUp = document.querySelector('.popUp')
    let game = document.querySelector('.game')

     if (count >= maxCount) {
        btn.disabled = true
        limit.textContent = `refresh, The correct answer is ${secretNumber} `
        //  popUp.style.zIndex= ('100')
        //  popUp.style.position = ('fixed')
         popUp.style.display = ('flex')
         popUp.style.position = 'fixed'
         popUp.style.top ='300'
        
         


    

    }
 }







// moon.addEventListener('click', () => {
//     body.style.backgroundColor = 'black';
//     moon.style.display('none')
// })



// function change(){
//     body.style.backgroundColor = 'black';
//     moon.style.display = 'none';
//     subGame.style.backgroundColor = 'white';
//     sun.style.display = 'block';

// }

// function change(){
//     body.classList.toggle('bodyDark')
//     moon.style.display.backgroundColor = 'black'
//     moon.classList.toggle('moonDark')
//      sun.classList.toggle = ('sun')
//     moon.contains.style.display = ('none')
//     moon.remove.style.display = ('none')
//     moon.add.style.display = ('block')

//     sun.contains.style.display = ('block')
//     sun.remove.style.display = ('block')
//     sun.add.style.display = ('none')
// }

function change(){
    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'black'
        subGame.style.backgroundColor = 'gray'
        link.style.color = 'white'
    //    localStorage.setItem('modes dark')

    } else{
        body.style.backgroundColor = 'white'
        subGame.style.backgroundColor = 'wheat'
        link.style.color = 'black'
        // localStorage.setItem('modes', 'light')
    }

    if (body.style.backgroundColor === 'white') {
            btn.style.backgroundColor = 'purple'
         btn.style.color = 'white'



    }
    

    if (mode.style.backgroundColor === ('white')) {
        mode.style.backgroundColor =('black')
    }else(
        mode.style.backgroundColor =('white')
    )

    if (moon.style.display === ('block')) {
        moon.style.display = ('none')
    }else(
        moon.style.display =('block')
    )

     if (sun.style.display === ('none')) {
        sun.style.display = ('block')
    }else(
        sun.style.display =('none')
    )
}

// let  = document.querySelector('fa-xmark')

function cancel() {
    let popUp = document.querySelector('.popUp')
    if (popUp.style.display === 'flex') {
        popUp.style.display = 'none'
    }
}















// const modes = localStorage.getItem('mode')

// if (modes === 'dark') {
//         body.style.backgroundColor = 'black'
//         subGame.style.backgroundColor = 'gray'
        

//     } else{
//         body.style.backgroundColor = 'white'
//         subGame.style.backgroundColor = 'wheat'
// }

