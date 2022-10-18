
$('#btnSaveItem').click(function (){
    let itemCode =  $('#InputItmCode').val();
    let itemName =    $('#InputItmName').val();
    let itemPrice =    $('#InputItmPrice').val();
    let itemQty =    $('#InputItmQty').val();

    var itemsObject ={
        code:itemCode,
        name:itemName,
        price:itemPrice,
        qty:itemQty

    }

    items.push(itemsObject);
    console.log(items);

    getAll();
    bindRowItemClickEvents();
    loadAllItemsForOption();
    dashItmLoad();
    setItmTextFieldValues("","","","");
    //subQty();

});

$('#btnItemDelete').click(function (){
    let deleteCode = $('#InputItmCode').val();
    if(deleteItem(deleteCode)){
        swal("Delete Successfully!", "You clicked the button!", "success");
        setItmTextFieldValues("","","","");

    }else {
        swal("No Item for ID!", "You clicked the button!", "warning");

    }

});


$('#btnItemUpdate').click(function (){
    let itemCode= $('#InputItmCode').val();
    let response = updateItem(itemCode);
    if(response){
        swal("Updated Successfully!", "You clicked the button!", "success");
        setItmTextFieldValues("","","","");
    }else{
        swal("Updated Failed!", "You clicked the button!", "warning");
    }


});


$('#btnViewAllItems').click(function (){
    getAll();

});

//function hoisting

function getAll(){
    $('#tblItem').empty();

    for (var item of items){

        var row  = `<tr><td>${item.code}</td><td>${item.name}</td><td>${item.price}</td><td>${item.qty}</td></tr>`;
        $('#tblItem').append(row);
    }
   // subQty();

}

function bindRowItemClickEvents() {
    $('#tblItem>tr').click(function () {
        let code = $(this).children(':eq(0)').text();
        let name = $(this).children(':eq(1)').text();
        let price = $(this).children(':eq(2)').text();
        let qty = $(this).children(':eq(3)').text();

        console.log(code, name, price, qty);

        $('#InputItmCode').val(code);
        $('#InputItmName').val(name);
        $('#InputItmPrice').val(price);
        $('#InputItmQty').val(qty);
    });
}

$('#InputItmCode').on('keydown', function (event){
    if(event.key=="Enter" && check(itmCodeRegEx, $("#InputItmCode"))){
        $('#InputItmName').focus();
    }
})

$('#InputItmName').on('keydown', function (event){
    if(event.key=="Enter"){
        $('#InputItmPrice').focus();
    }
})

$('#InputItmPrice').on('keydown', function (event){
    if(event.key=="Enter"){
        $('#InputItmQty').focus();
    }
})

$('#InputItmCode,#InputItmName,#InputItmPrice').on('keydown', function (event){
    if(event.key=="Tab"){
        event.preventDefault();
    }
})

// =======Search Item=============

$('#InputItmCode').on('keydown', function (event){
    if(event.key=="Enter"){
        let typeCode= $('#InputItmCode').val();
        let item= searchItems(typeCode);
        if(item!=null){
            setItmTextFieldValues(item.code,item.name,item.price,item.qty);
        }else{
            swal("No Item for ID!", "You clicked the button!", "warning");
            setItmTextFieldValues("","","","");
        }
    }

})

function setItmTextFieldValues(code, name ,price , qty){
    $('#InputItmCode').val(code);
    $('#InputItmName').val(name);
    $('#InputItmPrice').val(price);
    $('#InputItmQty').val(qty);

}

function searchItems(itmCode){
    for(let item of items){
        if(item.code==itmCode){
            return item;
        }
    }
        return null;
}


/*========================
Delete Item
=========================*/

function deleteItem(itemCode){
   let item = searchItems(itemCode);
   if(item!=null){
       let indexNumber = items.indexOf(item);
       items.splice(indexNumber,1);
       getAll();
       return true;
   }else {
       return false;
   }


}


/*========================
Update Item
=========================*/

function updateItem(itemCode){
    let item = searchItems(itemCode);
    if(item!=null){
        item.code=$('#InputItmCode').val();
        item.name=$('#InputItmName').val();
        item.price=$('#InputItmPrice').val();
        item.qty=$('#InputItmQty').val();
        getAll();
        return true;

    }else {
        return false;
    }

}



/*================================= Regx ====================*/

// items reguler expressions

const itmCodeRegEx = /^(I00-)[0-9]{1,3}$/;
const itmNameRegEx = /^[A-z ]{5,20}$/;
const itmPriceRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;;
const itmQtyHandRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

let itemValidations = [];
itemValidations.push({reg: itmCodeRegEx, field: $('#InputItmCode'),error:'Item Code Pattern is Wrong : I00-001'});
itemValidations.push({reg: itmNameRegEx, field: $('#InputItmName'),error:'Item Name Pattern is Wrong : A-z 5-20'});
itemValidations.push({reg: itmPriceRegEx, field: $('#InputItmPrice'),error:'Item price Pattern is Wrong :100 or 100.00'});
itemValidations.push({reg: itmQtyHandRegEx, field: $('#InputItmQty'),error:'Item Qty Pattern is Wrong : 10-10000'});


$("#InputItmCode,#InputItmName,#InputItmPrice,#InputItmQty").on('keyup', function (event) {
    checkValidity();
});

$("#InputItmCode,#InputItmName,#InputItmPrice,#InputItmQty").on('blur', function (event) {
    checkValidity();
});



function checkValidity() {
    let errorCount=0;
    for (let validation of itemValidations) {
        if (check(validation.reg,validation.field)) {
            textSuccess(validation.field,"");
        } else {
            errorCount=errorCount+1;
            setTextError(validation.field,validation.error);
        }
    }
    setButtonState(errorCount);
}

function check(regex, txtField) {
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
        $("#btnSaveItem").attr('disabled',true);
    }else{
        $("#btnSaveItem").attr('disabled',false);
    }
}

$(document).ready(function (){
    $("#searchItemInput").on('keyup',function (){
        var value = $(this).val().toLowerCase();

        $("#tblItem>tr").filter(function (){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});




