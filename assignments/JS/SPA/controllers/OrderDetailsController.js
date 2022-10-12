
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
    alert("order Purchase successfully");

   /* loadAllCustomers();
    bindRowClickEvents();
    loadAllCustomersForOption();
    dashCusLoad();*/


});