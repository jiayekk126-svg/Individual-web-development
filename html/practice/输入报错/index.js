const input = document.querySelector('.mobile-input');
const p = document.querySelector('.error');
p.style.display = 'none';
input.addEventListener('focus',() =>{
    input.addEventListener('input',function(){
        //const content = document.getElementById('number').value;
        //if(content.length)
        if(input.value.length !== 11 || input.value === ''){
            p.style.display = 'block';
        }else{
            p.style.display = 'none';
        }
    });
});
input.addEventListener('blur',() =>{
    p.style.display = 'none';
});
