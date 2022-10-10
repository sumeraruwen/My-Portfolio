
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

});

$('#btnItemDelete').click(function (){
    let deleteCode = $('#InputItmCode').val();
    if(deleteItem(deleteCode)){
        alert("Item Successfully deleted");
        setItmTextFieldValues("","","","");

    }else {
        alert("no such Item");

    }

});


$('#btnItemUpdate').click(function (){
    let itemCode= $('#InputItmCode').val();
    let response = updateItem(itemCode);
    if(response){
        alert("Item updated successfully");
        setItmTextFieldValues("","","","");
    }else{
        alert("updated failed!..");
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
    if(event.key=="Enter"){
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
            alert("There is no customer for that ID");
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





