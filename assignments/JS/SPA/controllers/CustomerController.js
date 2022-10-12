
$('#btnCustomer').click(function (){

    let customerID = $('#InputCusID').val();
    let customerName = $("#InputCusName").val();
    let customerAddress = $("#InputCusAddress").val();
    let customerSalary = $("#InputCusSalary").val();

    var customerObject = {
        id: customerID,
        name: customerName,
        address: customerAddress,
        salary: customerSalary

    }
    customers.push(customerObject);
    console.log(customers);

    loadAllCustomers();
    bindRowClickEvents();
    loadAllCustomersForOption();
    dashCusLoad();


});

$('#btnCusDelete').click(function (){
    let deleteID = $('#InputCusID').val();
    if(deleteCustomer(deleteID)){
        alert("Customer Successfully deleted");
        setCusTextFieldValues("","","","");

    }else {
        alert("no such customer");

    }
})

$('#btnCusUpdate').click(function (){
   let customerID= $('#InputCusID').val();
   let response = updateCustomer(customerID);
   if(response){
       alert("Customer updated successfully");
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
    if(event.key=="Enter"){
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
                alert("There is no customer for that ID");
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


$()