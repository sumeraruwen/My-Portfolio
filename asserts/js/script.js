$(window).scroll(function (){
    var $current = $(this).scrollTop();
    if($current>50){
        $('#header').addClass('navbar-color');
        $('.ad').addClass('a-color');
        $('.ad').addClass('a-hover');
    }else{
        $('#header').removeClass('navbar-color');
        $('.ad').removeClass('a-color');
        $('.ad').removeClass('a-hover');
    }

   // $('nav').toggleClass('scrolled',$(this).scrollTop()>50);
});

/*
$('#downloadCV').click(function (){
    console.log("h");
})*/


