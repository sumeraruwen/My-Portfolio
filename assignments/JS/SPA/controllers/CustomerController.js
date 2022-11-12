
$('#btnCustomer').click(function (){

    let customerID = $('#InputCusID').val();
    let customerName = $("#InputCusName").val();
    let customerAddress = $("#InputCusAddress").val();
    let customerSalary = $("#InputCusSalary").val();

    var cusObj = Object.assign({},customerObject);
             cusObj.id = customerID;
             cusObj.name = customerName;
             cusObj.address = customerAddress;
             cusObj.salary = customerSalary;

   /* var customerObject = {
        id: customerID,
        name: customerName,
        address: customerAddress,
        salary: customerSalary

    }*/
   // customers.push(customerObject);
    customers.push(cusObj);
    console.log(customers);

    loadAllCustomers();
    bindRowClickEvents();
    loadAllCustomersForOption();
    dashCusLoad();


});

$('#btnCusDelete').click(function (){
    let deleteID = $('#InputCusID').val();
    if(deleteCustomer(deleteID)){
       // alert("Customer Successfully deleted");
        swal("Delete Successfully!", "You clicked the button!", "success");
        setCusTextFieldValues("","","","");

    }else {
        swal("No Customer for ID!", "You clicked the button!", "warning");

    }
})

$('#btnCusUpdate').click(function (){
   let customerID= $('#InputCusID').val();
   let response = updateCustomer(customerID);
   if(response){
       swal("Update Successfully!", "You clicked the button!", "success");
       setCusTextFieldValues("","","","");
   }else{
       alert("updated failed!..");
   }

})

$('#btnGetAll').click(function (){
    getAll();

});

//-----function hoisting-------------

function loadAllCustomers(){
    $('#tblCustomer').empty();

    for (var cus of customers){

        var row  = `<tr><td>${cus.id}</td><td>${cus.name}</td><td>${cus.address}</td><td>${cus.salary}</td></tr>`;
        $('#tblCustomer').append(row);
    }

}

function bindRowClickEvents() {
    $('#tblCustomer>tr').click(function () {
        let id = $(this).children(':eq(0)').text();
        let name = $(this).children(':eq(1)').text();
        let address = $(this).children(':eq(2)').text();
        let salary = $(this).children(':eq(3)').text();

        console.log(id, name, address, salary);

        $('#InputCusID').val(id);
        $('#InputCusName').val(name);
        $('#InputCusAddress').val(address);
        $('#InputCusSalary').val(salary);
    });
}

/* $('#InputCusID').focus(function (){
     console.log('input');
 });*/


$('#InputCusID').on('keydown',function (event){
    if(event.key=="Enter" && check(cusIDRegEx, $("#InputCusID"))){
        $('#InputCusName').focus();
    }
})

$('#InputCusName').on('keydown',function (event){
    if(event.key=="Enter"){
        $('#InputCusAddress').focus();
    }
})

$('#InputCusAddress').on('keydown',function (event){
    if(event.key=="Enter"){
        $('#InputCusSalary').focus();
    }
})

$('#InputCusID,#InputCusName,#InputCusAddress,#InputCusSalary').on('keydown',function (event){
    if(event.key=="Tab"){
        event.preventDefault();
    }
})


// =======Search Customer=============

    $('#InputCusID').on('keydown' , function (event){
        if(event.key=="Enter"){
            let typeId = $('#InputCusID').val();
            let customer = searchCustomer(typeId);
            if(customer!=null){
                setCusTextFieldValues(customer.id,customer.name,customer.address,customer.salary);
            }else{
                swal("No Customer for ID!", "You clicked the button!", "warning");
                setCusTextFieldValues("","","","");

            }

        }

    });

function setCusTextFieldValues(id,name,address,salary){
    $('#InputCusID').val(id);
    $('#InputCusName').val(name);
    $('#InputCusAddress').val(address);
    $('#InputCusSalary').val(salary);

}

function searchCustomer(cusID){
    for(let customer of customers){
        if(customer.id==cusID){
            return customer;
        }
    }
    return null;

}


/*========================
Delete customer
=========================*/

function deleteCustomer(customerID){
     let customer = searchCustomer(customerID);

     if(customer!=null){
        let indexNumber = customers.indexOf(customer);
        customers.splice(indexNumber,1);
        loadAllCustomers();
        return true;

     }else {
         return false;
     }
}

/*========================
Update customer
=========================*/

function updateCustomer(customerID){
  let customer = searchCustomer(customerID);
  if(customer!=null){
      customer.id=$('#InputCusID').val();
      customer.name=$('#InputCusName').val();
      customer.address=$('#InputCusAddress').val();
      customer.salary=$('#InputCusSalary').val();
      loadAllCustomers();
      return true;

  }else {
      return false;
  }

}


/*================================= Regx ====================*/

// customer reguler expressions

const cusIDRegEx = /^(C00-)[0-9]{1,3}$/;
const cusNameRegEx = /^[A-z ]{5,20}$/;
const cusAddressRegEx = /^[0-9/A-z. ,]{7,}$/;
const cusSalaryRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

let customerValidations = [];
customerValidations.push({reg: cusIDRegEx, field: $('#InputCusID'),error:'Customer ID Pattern is Wrong : C00-001'});
customerValidations.push({reg: cusNameRegEx, field: $('#InputCusName'),error:'Customer Name Pattern is Wrong : A-z 5-20'});
customerValidations.push({reg: cusAddressRegEx, field: $('#InputCusAddress'),error:'Customer Address Pattern is Wrong : A-z 0-9 ,/'});
customerValidations.push({reg: cusSalaryRegEx, field: $('#InputCusSalary'),error:'Customer Salary Pattern is Wrong : 100 or 100.00'});


$("#InputCusID,#InputCusName,#InputCusAddress,#InputCusSalary").on('keyup', function (event) {
    checkItmValidity();
});

$("#InputCusID,#InputCusName,#InputCusAddress,#InputCusSalary").on('blur', function (event) {
    checkItmValidity();
});



function checkItmValidity() {
    let errorCount=0;
    for (let validation of customerValidations) {
        if (checkItm(validation.reg,validation.field)) {
            textSuccess(validation.field,"");
        } else {
            errorCount=errorCount+1;
            setTextError(validation.field,validation.error);
        }
    }
    setButtonState(errorCount);
}

function checkItm(regex, txtField) {
    let inputValue = txtField.val();
    return regex.test(inputValue) ? true : false;
}

function setTextError(txtField,error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField,"");
    } else {
        txtField.css('border', '2px solid red');
        txtField.parent().children('span').text(error);
    }
}

function textSuccess(txtField,error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField,"");
    } else {
        txtField.css('border', '2px solid green');
        txtField.parent().children('span').text(error);
    }
}

function defaultText(txtField,error) {
    txtField.css("border", "1px solid #ced4da");
    txtField.parent().children('span').text(error);
}

function focusText(txtField) {
    txtField.focus();
}

function setButtonState(value){
    if (value>0){
        $("#btnCustomer").attr('disabled',true);
    }else{
        $("#btnCustomer").attr('disabled',false);
    }
}


$(document).ready(function (){
    $("#searchCustomerInput").on('keyup',function (){
        var value = $(this).val().toLowerCase();

        $("#tblCustomer>tr").filter(function (){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});

