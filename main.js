menu = [
"*Margherita",
"*Hawian pizza",
"*Pepperoni pizza",
"*Veggie pizza",
"*Cheese pizza"]
function view_menu(){
console.log(menu)
document.getElementById("menu2").innerHTML = menu;}
function add_item(){
var new_pizza = document.getElementById("add_item").value
menu.push(new_pizza)
document.getElementById("menu2").innerHTML = menu
}
function sorting_menu(){
menu.sort();
document.getElementById("menu2").innerHTML = menu
}