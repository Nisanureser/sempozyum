const toggleBtn=document.querySelector('.toogle_btn')
const toggleBtnIcon=document.querySelector('.toogle_btn i')
const dropDownMenu=document.querySelector('.dropDown_menu')
toggleBtn.onclick=function(){
    dropDownMenu.classList.toggle('open')
    const isOpen =dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList=isOpen 
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}