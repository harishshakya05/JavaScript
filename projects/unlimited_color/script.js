
const color = function (){
    const colorStr = '0123456789ABCDEF';
    let color = "#";
    for(i=0;i<6;i++){
        let number = Math.floor(Math.random() * 16);
        color += colorStr[number];
    }
    console.log(color);
    return color;
} 

let startItem; 
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
start.addEventListener('click' , (e)=>{
    if(!startItem){
        startItem = setInterval(() => {
            document.body.style.backgroundColor = color();
        }, 1000);    
    }    
})

stop.addEventListener('click',()=>{
    clearInterval(startItem);
    startItem = null;
})

