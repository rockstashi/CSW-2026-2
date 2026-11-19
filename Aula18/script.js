function Calcular(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operation = document.getElementById("operation").value;


    let result;
    switch (operation) {
        case "+":
        result =parseFloat(num1) + parseFloat(num2);
        break;
        case "-":
        result =parseFloat(num1) - parseFloat(num2);
        break;
        case "*":
        result =parseFloat(num1) * parseFloat(num2);
        break;
        case "/":
            if (parseFloat(num2) === 0) {
                result = "Error: Division by zero";
            }
            else {
        result =parseFloat(num1) / parseFloat(num2);
        }

    }  
    

   document.getElementById("resultado").textContent = result;

}
const btnCalcular = document.getElementById("calculate2");
btnCalcular.addEventListener("click", Calcular);