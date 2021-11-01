function calculatePrice(originalValue, discount){
    return originalValue * (1 - (discount/100));
}

function cDiscount(){
    const originalValue = document.getElementById("inputPrice");
    const discount = document.getElementById("inputDiscount");
    
    const result = document.getElementById("result");
    result.innerText = "El resultado es : $" + calculatePrice(originalValue.value, discount.value);
}