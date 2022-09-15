const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const clear = document.getElementById("clear")
const dec = document.querySelector('#decrease')
const inc = document.querySelector('#increase')
const sizediv = document.getElementById('size')
const eraser = document.getElementById('eraser')

let size = 10
let isPressed = false
let color = 'black'
let x
let y 



eraser.addEventListener('click',()=>{

        
    if(color !== 'whitesmoke'){
        color = 'whitesmoke'
    }else {
            color = theInput.value;
    }

    eraser.classList.toggle('active')

    if(eraser.classList.contains('active')){
        canvas.classList.remove('cursor-paint')
    }else{
        canvas.classList.add('cursor-paint')
    }

})



var theInput = document.getElementById("color");

theInput.addEventListener("input", function(){
  color = theInput.value;
  
    if(eraser.classList.contains('active')){
        eraser.classList.remove('active')
    }

  // Do something with `theColor` here.
}, false);

dec.addEventListener('click',()=>{
    if(size>9 && size<=20){
        size = size - 5;
    }

    sizediv.innerHTML = size
})

inc.addEventListener('click',()=>{
    if(size<=15){
        size = size + 5
    }

    sizediv.innerHTML = size
})


canvas.addEventListener('mousedown',(e)=>{
    isPressed = true

    x = e.offsetX
    y = e.offsetY

    // console.log(x,y,isPressed);
})

canvas.addEventListener('mouseup',(e)=>{
    isPressed = false

    x = undefined
    y = undefined

    // console.log(x,y,isPressed);
})

canvas.addEventListener('mousemove',(e)=>{
    if(isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2,y2)
        drawLine(x,y,x2,y2)

        x = x2
        y = y2
    }
})


function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true);
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1,y1,x2,y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

clear.addEventListener('click', ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})