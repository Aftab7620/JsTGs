
function result() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let action = document.getElementById('opr').value;

    let ans;

    if (!isNaN(num1) && !isNaN(num2)) {
        switch (action) {
            case 'Addition':
                ans = num1 + num2;
                break;
            case 'Subtraction':
                ans = num1 - num2;
                break;
            case 'Multiplication':
                ans = num1 * num2;
                break;
            case 'Division':
                if( num2 !== 0){
                    ans = num1 / num2;
                }else{
                    ans = "Cannot divide by zero";
                }
                
                break;
            default:
                ans = "Invalid operation";
        }
    } else {
        ans = "Please enter valid numbers";
    }
    document.getElementById("output").innerText = "Answer is : " + ans;
}
