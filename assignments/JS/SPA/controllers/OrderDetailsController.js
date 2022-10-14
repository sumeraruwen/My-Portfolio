
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


    dashOrdLoad();


});

function clearOrderCusTextField(){
    $('#orderCustomerID ,#orderCustomerName ,#orderCustomerSalary,#orderCustomerSalary , #orderItemPrice , #orderItemName , #orderItemQtyHand, #orderItemQty , #inputCash ,#inputBalance,#inputDiscount, #orderCustomerAddress,#orderItemCode' ).val("");
  //  $('#tblOrderDetails>tr>td').val("");
   /* $('#InputCusName').val(name);
    $('#InputCusAddress').val(address);
    $('#InputCusSalary').val(salary);*/

}