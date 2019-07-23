var menu = {fries: 3, burger: 2};
var input = document.querySelector('input');
var button = document.querySelector('button');
button.addEventListener('click', function(){
    var customerOrder = input.value;
    customerOrder = customerOrder.split(',');
    //console.log(customerOrder);

    for(var i = 0; i < customerOrder.length; i++){
        
        var customerItem = customerOrder[i].split(':');
        //console.log(customerItem);

    }

    for(var i = 0; i < menu.length; i++){
        
        var menuItem = menu[i].split(':');
        console.log(menuItem);

        
        }
//console.log(menuItem[0]);

        for(var item in menu) {
           customerItem += menu[item] 
           
           console.log(item); }

            
//} else{


})