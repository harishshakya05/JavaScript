const clock = document.querySelector('#clock');
setInterval(()=>{
    const currentDate = new Date();    
    clock.innerHTML = currentDate.toLocaleTimeString();
},1000)

