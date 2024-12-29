import './App.css'
import React from 'react'

function Calculator(){


function calculate()
{
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operator = document.getElementById('operator').value;
    let result = 0;

    switch(operator){
        case '+':
        result = num1+num2
        break;

        case '-':
        result = num1+num2
        break;

        case '*':
        result = num1+num2
        break;

        case '/':
        result = num2==0? num1/num2 :'canntot divide by zero'
        break;

        case '%':
            result = num1/100*num2
            break;

        default:
            result = 'Error 404'

    }

    document.getElementById('result').innerText='Result: ' + result;

}

return(
    <div style= {{padding:'20px',border:'8px solid #ccc',alignItems:'center',width:'300px',background:'#205b7a'}} className ='App' >
        <h2>CALCULATOR</h2>
        <input type='number'id='num1' placeholder='First Number' style={{width:'100%',marginBottom:'10px'}}/>
        <select id='operator' style={{width: '100%',marginBottom:'10px'}}>
            <option value='+'>ADD</option>
            <option value='-'>Subtract</option>
            <option value='*'>Multiply</option>
            <option value='/'>Divide</option>
            <option value='%'>Percentage</option>
        </select>

        <input type='number' id='num2' placeholder='Second Number' style={{width:'100%',marginBottom:'10px'}}/>
        <button onClick={calculate} style={{width:'100%',padding:'10px', marginBottom:'10px'}}> Calculate</button>
        <p id='result' style={{fontWeight:'bold',fontsize:'16px'}}>Result</p>



    </div>
);
}

export default Calculator

