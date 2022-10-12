
$(window).on('load', function () {
    console.log("Window on load");
    $('#customerContent').css('display','none');
    $('#itemContent').css('display','none');
    $('#orderP').css('display','none');
    $('#dashP').css('display','block');

    // $("#loader").css('display','none');
   // $("#loader").fadeOut(1000);
});


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

function dashCusLoad(){
    let total = customers.length;
    $('#cusDashB').text(total);
}

function dashItmLoad(){
    let total= items.length;
    $('#itmDashB').text(total);
}

function dashOrdLoad(){
    let total= orderDetails.length;
    $('#ordDashB').text(total);
}