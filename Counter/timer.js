function timer(){

do {
	var qty = document.getElementById('qty').value;
var new_qty = qty;
   new_qty++;
   document.getElementById('qty').value = new_qty;
   return new_qty;
   }
while(new_qty <10);

}