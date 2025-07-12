let text = 'Welcome to My Portofolio';
const type = document.getElementById('type');
let i = 0;
function typewriter(){
    if(i < text.length){
        type.innerHTML += text.charAt(i);
        i++;
    }
    setTimeout(typewriter,100);
}
typewriter();
const nextButton = document.querySelectorAll('.nextbtn');
const previousButton = document.querySelectorAll('.previous-btn');
nextButton.forEach((button)=>{
    button.addEventListener('click',()=>{
        const targetId = button.dataset.target;
        const page = document.querySelector(`.page[data-id="${targetId}"]`);
        page.classList.add('flipped');
    })
});
previousButton.forEach((button)=>{
    button.addEventListener('click',()=>{
        const targetId = button.dataset.target;
        const page = document.querySelector(`.page[data-id="${targetId}"]`);
        page.classList.remove('flipped');
    })
})