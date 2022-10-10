
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