$(document).ready(function(){


// Humber Menu Icon Js
  $('.mobile-menu-icon').click(function(){
    $('.im-sidebar-area').addClass('show');
  });
  $('.mobile-menu-close-icon').click(function(){
    $('.im-sidebar-area').removeClass('show');
  });

      
})

let fullBody = document.body;
function bodyClass() {
    fullBody.classList.toggle('overlay');
}




