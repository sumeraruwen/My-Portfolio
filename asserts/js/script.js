$(window).scroll(function (){
    var $current = $(this).scrollTop();
    if($current>50){
        $('#header').addClass('navbar-color');
        $('.ad').addClass('a-color');
    }else{
        $('#header').removeClass('navbar-color');
        $('.ad').removeClass('a-color');
    }

   // $('nav').toggleClass('scrolled',$(this).scrollTop()>50);
});

/*
$('#downloadCV').click(function (){
    console.log("h");
})*/


