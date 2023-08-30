const cube = document.getElementById('animatedCube');
const optionsContainer = document.getElementById('options');
const option1 = document.getElementById('twitter')
const option2 = document.getElementById('facebook')
const option3 = document.getElementById('linkedin')
let animationPaused = false;

/* Funcion que detiene y reactiva el movimiento*/
cube.addEventListener('click',()=>{
    console.log('Di clic en el cubo');
    if(!animationPaused){
        console.log('Animacion pausada');
        cube.style.animationPlayState = "paused";
        optionsContainer.style.display = "flex";
        optionsContainer.style.flexDirection = "column"
        animationPaused = true;
        setTimeout(()=>{
            cube.style.animationPlayState = 'running' ;
            optionsContainer.style.display = "none";
            animationPaused = false;
        }, 2000);
    }
})


/* Funcion para paginas*/
option1.addEventListener('click', () =>{
    console.log("Di clic en la opción 1");
    window.location.href = './pages/contact.html'
})
option2.addEventListener('click', () =>{
    console.log("Di clic en la opción 2");
    window.location.href = './pages/newsletter.html'
})
option3.addEventListener('click', () =>{
    console.log("Di clic en la opción 3");
    window.location.href = './pages/services.html'
})
