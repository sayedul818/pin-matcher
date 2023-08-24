
function generatePin(){
    const random=Math.round(Math.random()*10000);
    return random;
}
function getPin(){
    const pin=generatePin();
    const pinString=pin+"";
    if(pinString.length===4){
        return pin;
    }else{
        return getPin();
    }
}

document.getElementById("generate-pin-btn").addEventListener("click",function(){
    const pinInputField=document.getElementById("pin-display-field");
    pinInputField.value=getPin();
})

document.getElementById("calculator").addEventListener("click",function(event){
    const character=event.target.innerText;
    const typedNumberField=document.getElementById("typed-number");
    const previousTypedNumber=typedNumberField.value;
    const newTypeNumber=previousTypedNumber+character;
    typedNumberField.value=newTypeNumber;
    if(isNaN(character)){
        if(character==="C"){
        typedNumberField.value="";
        }else if(character==="<"){
            const digits=previousTypedNumber.split("");
            digits.pop();
            const remainingDigits=digits.join("");
            typedNumberField.value=remainingDigits;
        }
    }
})

document.getElementById("verify-pin").addEventListener("click",function(){
    const pinDisplayField=document.getElementById("pin-display-field");
    const pinDisplayValue=pinDisplayField.value;
    const typedNumberField=document.getElementById("typed-number");
    const typeNumberValue=typedNumberField.value;
    const failureNotificationMessage=document.getElementById("failure-notification");
    const successNotificationMessage=document.getElementById("success-notification");
    if(pinDisplayValue===typeNumberValue){
        successNotificationMessage.style.display="block";
        failureNotificationMessage.style.display="none";
    }else{
        failureNotificationMessage.style.display="block";
        successNotificationMessage.style.display="none";
    }
})


const product=5;
const price="7";
const total=product+price;
console.log(typeof(total));