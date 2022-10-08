
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