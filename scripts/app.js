// alert("Im working")

// By using the modulus I can check to see if the number is divisible by 2 to find if the number is even
function evenOrOdd(number) {
    if(number%2 == 0){
        return "Even";
    }else{
        return "Odd";
    }
  
}

// Or we can use a ternary.
// If the number is divisable by 2 then it will return Even, but if it isn't then it will return Odd
function oddOrEven(number){
    return number % 2 == 0 ? "Even" : "Odd"
}