        let result = document.querySelector('.type-writer');
        const typing = 'Hi Have a good day Add your Daily Tasks here!!';
        let i = 0;
        function typerEffect(){
            if(i < typing.length){
                result.innerHTML += typing.charAt(i);
                i++;
            }
            setTimeout(typerEffect,50);
            if(i === typing.length-1){
                document.querySelector('.header-container').style.opacity = '1';
                document.querySelector('.header-container').style.transform = 'scale(1)';
            
            }
        }
        typerEffect();
        const orderList = document.querySelector('.list-container');
        const inputElement = document.querySelector('input');
        function addTodo(){
            if(inputElement.value === ''){
                alert('Write something');
            }
            else{
                const li = document.createElement('li');
                const span = document.createElement('span');
                li.textContent = inputElement.value;
                 localStorage.setItem('task',JSON.stringify(inputElement.value));
                if(li.textContent === inputElement.value){
                    document.querySelector('#message').innerHTML = 'Added&#9989;'
                    document.querySelector('#message').style.display = 'block';
                    setTimeout(()=>{
                        document.querySelector('#message').style.display = 'none';
                    },500);
                }
    
                orderList.appendChild(li);
                inputElement.value = '';
                span.innerHTML = '&#10060;';
                li.appendChild(span);
                span.addEventListener('click',() =>{
                    li.style.display = 'none';
                    if(li.style.display === 'none'){
                        document.querySelector('#message').style.display = 'block';
                        document.querySelector('#message').innerHTML = 'Deleted&#9989;'
                        setTimeout(()=> {
                            document.querySelector('#message').style.display = 'none';
                        },500);
                    }
                });
            };
        };
        inputElement.addEventListener('keydown',(event)=>{
            if(event.key === 'Enter'){
                addTodo();
            }
        });