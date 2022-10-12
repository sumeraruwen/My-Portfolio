
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

   $('#tblOrderDetails').empty();
    clearOrderCusTextField();
    $('#val').text("Total : 0");
    $('#subVal').text("Sub Total : 0");


    dashOrdLoad();


});

function clearOrderCusTextField(){
    $('.form-control').val("");
  //  $('#tblOrderDetails>tr>td').val("");
   /* $('#InputCusName').val(name);
    $('#InputCusAddress').val(address);
    $('#InputCusSalary').val(salary);*/

}