
/*  Home nav*/
$('.nHome').click(function (){
    $('#customerContent').css('display','none');
    $('#itemContent').css('display','none');
    $('#orderP').css('display','none');
    $('#dashP').css('display','block');
});

/*  Item nav*/
$('.nItem').click(function (){
    $('#customerContent').css('display','none');
    $('#orderP').css('display','none');
    $('#dashP').css('display','none');
    $('#itemContent').css('display','inline-block');
});

/*  Customer nav*/
$('.nCustomer').click(function (){
    $('#customerContent').css('display','inline-block');
    $('#orderP').css('display','none');
    $('#dashP').css('display','none');
    $('#itemContent').css('display','none');
});

/*  Orders nav*/
$('.nOrder').click(function (){
    $('#customerContent').css('display','none');
    $('#orderP').css('display','inline-block');
    $('#dashP').css('display','none');
    $('#itemContent').css('display','none');
});
