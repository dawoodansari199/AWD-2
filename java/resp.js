burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightnav')
navlist = document.querySelector('.navlist')



burger.addEventListener('click', ()=>{
    
    rightNav.classList.toggle('v-classresp') ;
    navlist.classList.toggle('v-classresp') ;
    navbar.classList.toggle('h-navresp') ;
})  