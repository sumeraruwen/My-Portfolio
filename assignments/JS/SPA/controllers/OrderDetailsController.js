

$(document).ready(function (){
    generateOrderID();

});

function generateOrderID() {
    if (orderDetails.length == 0) {
        $('#inputOrderID').val("o001");
    } else {
        let odCount = orderDetails.length+1 ;

        $('#inputOrderID').val("o00" + odCount);
        console.log(odCount);

    }
}

$('#btnPurchase').click(function (){


    let orderID = $('#inputOrderID').val();
    let customerID = $("#InputCusID").val();
    let total = $("#val").text();
    let subTotal = $("#subVal").text();

    var orderDetailsObject = {
        id: orderID,
        cusID: customerID,
        tot: total,
        subTot: subTotal

    }
    orderDetails.push(orderDetailsObject);
    console.log(orderDetails);
    swal("Order Purchase Successfully!", "You clicked the button!", "success");


    clearOrderCusTextField();
    $('#val').text("Total : 0");
    $('#subVal').text("Sub Total : 0");
    $('#tblOrderDetails').empty();
    orders.length=0;

    generateOrderID();
    dashOrdLoad();


});

function clearOrderCusTextField(){
    $('#orderCustomerID ,#orderCustomerName ,#orderCustomerSalary,#orderCustomerSalary , #orderItemPrice , #orderItemName , #orderItemQtyHand, #orderItemQty , #inputCash ,#inputBalance,#inputDiscount, #orderCustomerAddress,#orderItemCode' ).val("");

}

$('#btnClearOrderItem').click(function (){
    clearOrderCusTextField();
    $('#tblOrderDetails').empty();
    orders.length=0;


});