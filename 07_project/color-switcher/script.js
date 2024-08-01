const allButton = document.querySelectorAll(".button");
    const bd = document.querySelector("body");
    allButton.forEach( (bt)=>{
      bt.addEventListener("click", (e)=>{
        if(e.target.id === 'grey'){
          bd.style.backgroundColor = 'grey'
        }
        if(e.target.id === 'white'){
          bd.style.backgroundColor = 'white'
        }
        if(e.target.id === 'blue'){
          bd.style.backgroundColor = 'blue'
        }
        if(e.target.id === 'yellow'){
          bd.style.backgroundColor = 'yellow'
        }
      })
    })