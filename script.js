function checkPin(){

let pin=document.getElementById("pin").value

if(pin.length==6){

document.getElementById("pinmsg").innerText="Delivery Available"

}else{

document.getElementById("pinmsg").innerText="Invalid Pincode"

}

}


function buyNow(){

setTimeout(()=>{

location.href="address.html"

},1000)

}
