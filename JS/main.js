new WOW().init();

$(document).ready(function () {
    let tabsItem = $('.tabs-item');
    
    tabsItem.on('click', function(event){
       event.preventDefault(); 
       console.log($(this));
       let aciveContent = $(this).attr('href');
       $('.visible').toggleClass('visible animated zoomIn');
       $(aciveContent).toggleClass('visible animated zoomIn');
       $('.tabs-item-activ').toggleClass('tabs-item-activ');
       $(this).toggleClass('tabs-item-activ');
    });
});