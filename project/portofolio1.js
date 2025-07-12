        /* cover page text type writer animation */
        const text1 = 'Welcome to my Portofolio';
        const text2 = 'hsekaR alukunuG';
        const  result1 = document.querySelector('#result1');
        const result2 = document.querySelector('#result2');
        let i = 0;
        function textWriter(){
            if(i < text1.length){
                result1.innerHTML += text1.charAt(i);
                i++;
            }
            setTimeout(textWriter,100);
        }
        textWriter();

        const pages = document.querySelectorAll('.page');
        const book = document.querySelector('.js-book');
        let high = pages.length;
        pages.forEach((page,index )=>{
            page.style.zIndex = high - index;
        });
         const nextButton = document.querySelectorAll('.nextbtn');
         const previousButton = document.querySelectorAll('.previousbtn');
         nextButton.forEach((btn) => {
            btn.addEventListener('click',()=>{
                const targetId = btn.dataset.target;
                const page = document.querySelector(`.page[data-id="${targetId}"]`);
                page.style.zIndex = ++high;
                page.classList.add('flipped');
                pageFlip();
                if(page.classList.contains('flipped')){
                    book.style.transform = 'translateX(50%)';
                }
            });
         });
         previousButton.forEach((btn) => {
            btn.addEventListener('click',()=>{
                const targetId = btn.dataset.target;
                const page = document.querySelector(`.page[data-id="${targetId}"]`);
                page.style.zIndex = ++high;
                page.classList.remove('flipped');
                pageFlip();
                /*high++;*/
            });
         });
         /*More Skills*/
         function revealSound(){
            const revealsound = new Audio('woosh-230554.mp3');
            revealsound.play();
         }
         const moreSkillsBtn = document.querySelector('.social-media button');
         moreSkillsBtn.addEventListener('click',()=> {
             moreSkillsBtn.style.display = 'none';
             revealSound();
             document.querySelector('.js-social-media a:nth-child(5)').style.display = 'block';
             document.querySelector('.js-social-media a:nth-child(6)').style.display = 'block';
             document.querySelector('.js-social-media').style.height = '180px';
             document.querySelector('.js-skills-container').classList.add('reveal');

         });
         /*Page flip sound */
         function pageFlip(){
            const sound = new Audio('pageturn-102978.mp3');
            sound.play();
         }
         /*project-btns*/
         const gameButton = document.querySelector('.gamebtn');
         /*game container*/
         const gameContainer = document.querySelector('#game-container');
         const todoButton = document.querySelector('.todobtn');
         /*todo container*/
         const todoContainer = document.querySelector('#todo-container');
         /* project-content */
         const projectcontent = document.querySelector('.project-content');
         const todoFrame = document.querySelector('#todo-container iframe');
         gameButton.addEventListener('click',()=>{
            revealSound();
            gameContainer.style.height = '450px';
            todoContainer.style.height = '2px';
            projectcontent.style.transform = 'scale(0)';

         });
         todoButton.addEventListener('click',()=>{
             revealSound();
            todoContainer.style.height = '450px';
            gameContainer.style.height = '2px';
            setTimeout(()=>{
                todoFrame.src = 'todo.html';
            },1000);
         });
         /* creating form */
         const formElement = document.querySelector('form');
         formElement.addEventListener('submit',()=>{
            alert('Message Sent Successfully');
         });
         /* contact Button */
         const contactElement = document.querySelector('.js-contactbtn');
         contactElement.addEventListener('mouseover',()=>{
            contactElement.classList.add('contactbtnvisible');
         });
         contactElement.addEventListener('mouseout',()=>{
            contactElement.classList.remove('contactbtnvisible');
         });
             contactElement.addEventListener('click', () => {
             const pages = document.querySelectorAll('.page');
             const total = pages.length;

    // Last 3 pages indexes: total-3, total-2, total-1
    const reversePages = [
        pages[total - 1],
        pages[total - 2]
    ];

    // Delay reverse flipping one after another
    reversePages.forEach((page, index) => {
        setTimeout(() => {
            page.style.zIndex = ++high;
            page.classList.remove('flipped');
            pageFlip(); // sound
        }, index * 600); // 600ms delay between each page
    });
});  
const contactBtn = document.getElementById('contactBtn');
contactBtn.addEventListener('click',()=>{
    const pages = document.querySelectorAll('.page');
    pages.forEach((page,index) => {
        setTimeout(()=>{
            page.style.zIndex = ++high;
            page.classList.add('flipped');
        }, index * 400);
    });
});
