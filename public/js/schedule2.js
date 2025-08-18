function a(event){
    var char = event.which;
    if(char > 31 && char != 32 && (char < 65 || char > 90) && (char < 97 || char > 122)) {
       return false;
    } 
 }
 function numberonly(input){
    var num = /[^0-9]/gi;
    input.value = input.value.replace(num, "");
 }



function toggle(){

   var blur = document.getElementById('blur');
   blur.classList.toggle('active');
   var popup = document.getElementById('popup');
   popup.classList.toggle('active');
 }

const openPopupButtons = document.querySelectorAll('[data-popup-target]')
 const closePopupButtons = document.querySelectorAll('[data-close-button]')
 const overlay = document.getElementById('overlay')

 openPopupButtons.forEach(button => {
    button.addEventListener('click',() => {
        const popup = document.querySelector(button.dataset.popupTarget)
        openPopup(popup)
    })
 })

 closePopupButtons.forEach(button => {
    button.addEventListener('click',() => {
        const popup = button.closest('.book-form .popup')
        closePopup(popup)
    })
 })

 overlay.addEventListener('click'), () => {
    const popups = document.querySelectorAll('.book-form .popup.active')
    popups.forEach(popup => {
        closePopup(popup)
    })
 }
 
 function openPopup(popup){
    if (popup == null) return
    popup.classList.add('active')
    overlay.classList.add('active')
 }

 function closePopup(popup){
    if (popup == null) return
    popup.classList.remove('active')
    overlay.classList.remove('active')
 }
