function checkPin(){

let pin=document.getElementById("pin").value

if(pin.length==6){

document.getElementById("pinmsg").innerText="Delivery Available"

}else{

document.getElementById("pinmsg").innerText="Invalid Pincode"

}

}

function buyNow(){

document.body.classList.add("loading")

setTimeout(()=>{

location.href="address.html"

},1000)

}

function confirmOrder(){

setTimeout(()=>{

location.href="success.html"

},2000)

}

function randomOrder(){

let a=Math.floor(100+Math.random()*900)
let b=Math.random().toString(36).substring(2,4).toUpperCase()
let c=Math.floor(100000+Math.random()*900000)

return a+b+c

}

document.addEventListener("DOMContentLoaded",()=>{

let o=document.getElementById("orderid")

if(o){

o.innerText="Order ID: "+randomOrder()

}

})
