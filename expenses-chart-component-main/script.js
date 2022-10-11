const wednesday = document.querySelector('.wed')
const small = document.querySelector('small')

wednesday.addEventListener('mouseover', ()=>{
     small.classList.add('add')


})
wednesday.addEventListener('mouseout', ()=>{
     small.classList.remove('add')


})
