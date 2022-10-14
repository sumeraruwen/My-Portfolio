
function loadAllCustomersForOption() {
    $("#selectCusID").empty();
    for (let cus of customers) {
        $("#selectCusID").append(`<option>${cus.id}</option>`);
    }

}


$('#selectCusID').on('click' , function (event){
    //if(event.key=="Enter"){
        let typeId = $('#selectCusID').val();
        let customer = searchOrderCustomer(typeId);
        if(customer!=null){
            setOrderCusTextFieldValues(customer.id,customer.name,customer.address,customer.salary);
        }else{
            alert("There is no customer for that ID");
            setOrderCusTextFieldValues("","","","");

        }

   // }

});

function setOrderCusTextFieldValues(id,name,address,salary){
    $('#orderCustomerID').val(id);
    $('#orderCustomerName').val(name);
    $('#orderCustomerAddress').val(address);
    $('#orderCustomerSalary').val(salary);

}

function searchOrderCustomer(cusID){
    for(let customer of customers){
        if(customer.id==cusID){
            return customer;
        }
    }
    return null;

}


function loadAllItemsForOption() {
    $("#selectItmCode").empty();
    for (let itm of items) {
        $("#selectItmCode").append(`<option>${itm.code}</option>`);
    }

}


// =======Search Item=============

$('#selectItmCode').on('click', function (event){
   // if(event.key=="Enter"){
        let typeCode= $('#selectItmCode').val();
        let item= searchOrderItems(typeCode);
        if(item!=null){
            setOrderItmTextFieldValues(item.code,item.name,item.price,item.qty);
        }else{
            alert("There is no customer for that ID");
            setOrderItmTextFieldValues("","","","");
        }
   // }

})

function setOrderItmTextFieldValues(code, name ,price , qty){
    $('#orderItemCode').val(code);
    $('#orderItemName').val(name);
    $('#orderItemPrice').val(price);
    $('#orderItemQtyHand').val(qty);

}

function searchOrderItems(itmCode){
    for(let item of items){
        if(item.code==itmCode){
            return item;
        }
    }
    return null;
}


/*
====================================

===================================*/

$('#btnAddOrderItem').click(function (){

    let orderItemCode = $('#orderItemCode').val();
    let orderItemName = $("#orderItemName").val();
    let orderItemPrice = $("#orderItemPrice").val();
    let orderItemQty = $("#orderItemQty").val();
    let orderItemTotal = orderItemPrice * orderItemQty;

    var orderObject = {
        code: orderItemCode,
        name: orderItemName,
        price: orderItemPrice,
        qty: orderItemQty,
        total: orderItemTotal

    }
    orders.push(orderObject);
    console.log(orders);

    //loadAllCustomers();
    //bindRowClickEvents();
    //loadAllCustomersForOption();
    loadAllOrderItems();
    calTotal();
    //subQty();


});

function loadAllOrderItems(){
    $('#tblOrderDetails').empty();

    for (var ord of orders){

        var row  = `<tr><td>${ord.code}</td><td>${ord.name}</td><td>${ord.price}</td><td>${ord.qty}</td><td>${ord.total}</td></tr>`;
        $('#tblOrderDetails').append(row);
    }

}

function calTotal(){
    let tables = document.getElementById("orderTable");
    sumVal = 0;

    for(var i = 1; i < tables.rows.length; i++)
    {
        sumVal = sumVal + parseInt(tables.rows[i].cells[4].innerHTML);

    }

    document.getElementById("val").innerHTML = "Total : " + sumVal;
    console.log(sumVal);
    return sumVal;

}

/*$('#orderItemQty').on('keypress' , function (){
    let ItemQty = $("#orderItemQty").val();
    console.log(ItemQty);
    let qtyHand = $('#orderItemQtyHand').val();
    console.log(qtyHand);

    if(ItemQty >= qtyHand ){
        $('#btnAddOrderItem').attr('disabled',true);
    }else{
        $('#btnAddOrderItem').attr('disabled', false);
    }
});*/


$('#inputCash').on('keyup' , function (){

    let cashAmount = $('#inputCash').val();
    console.log(cashAmount);
    let balance = cashAmount - calTotal(sumVal);
    console.log(balance);

    $('#inputBalance').val(balance);

    if(calTotal(sumVal) > cashAmount){
        $('#btnPurchase').attr('disabled',true);
    }else{
        $('#btnPurchase').attr('disabled', false);
    }

});



$('#inputDiscount').on('keyup' , function (){
    let discountAmount = $('#inputDiscount').val();

    let subT =  calTotal(sumVal) - discountAmount;
    console.log(subT);

    document.getElementById("subVal").innerHTML = "Sub Total : " + subT;
  //  $('#subVal').val(subT);


});


/*
=================================
subtract item qty
=================================
*/

function subQty(){
  let qtyHand = $('#orderItemQtyHand').val();
  let takeQty = $("#orderItemQty").val();

  let newQty = qtyHand - takeQty;
    console.log("new qty "+newQty);

}

/*
$('#btnPurchase').click(function (){
    if(cashAmount(cah)){

    }


});
*/



