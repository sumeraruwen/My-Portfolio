
function loadAllCustomersForOption() {
    $("#selectCusID").empty();
    for (let cus of customers) {
        $("#selectCusID").append(`<option>${cus.id}</option>`);
    }

}


$('#selectCusID').on('keydown' , function (event){
    if(event.key=="Enter"){
        let typeId = $('#selectCusID').val();
        let customer = searchOrderCustomer(typeId);
        if(customer!=null){
            setOrderCusTextFieldValues(customer.id,customer.name,customer.address,customer.salary);
        }else{
            alert("There is no customer for that ID");
            setOrderCusTextFieldValues("","","","");

        }

    }

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

$('#selectItmCode').on('keydown', function (event){
    if(event.key=="Enter"){
        let typeCode= $('#selectItmCode').val();
        let item= searchOrderItems(typeCode);
        if(item!=null){
            setOrderItmTextFieldValues(item.code,item.name,item.price,item.qty);
        }else{
            alert("There is no customer for that ID");
            setOrderItmTextFieldValues("","","","");
        }
    }

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
