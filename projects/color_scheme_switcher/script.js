const colors = document.querySelectorAll(".button");
const body = document.querySelector('body')
colors.forEach((i)=>{    
    i.addEventListener('click',(e)=>{
        changeColor(e.target.id);       
    })
})

function changeColor(color){
    body.style.backgroundColor = color;
}