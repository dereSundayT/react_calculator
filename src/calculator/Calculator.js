import React , {Component} from 'react'
import './Calculator.css'

const Calculator = () => {
    render(){
        return(
            <div class="calculator">
            <div class="display"> 0  </div>
        
            <div onClick="clear" class="btn">C</div>
            <div onClick="sign" class="btn">+/-</div>
            <div onClick="percent" class="btn">%</div>
            <div onClick="divide" class="btn operator">/</div>
        
            <div onClick="append('7')" class="btn">7</div>
            <div onClick="append('8')" class="btn">8</div>
            <div onClick="append('9')" class="btn">9</div>
            <div onClick="times" class="btn operator">X</div>
        
            <div onClick="append('4')" class="btn">4</div>
            <div onClick="append('5')" class="btn">5</div>
            <div onClick="append('6')" class="btn">6</div>
            <div onClick="minus" class="btn operator">-</div>
        
            <div onClick="append('1')" class="btn">1</div>
            <div onClick="append('2')" class="btn">2</div>
            <div onClick="append('3')" class="btn">3</div>
            <div onClick="add" class="btn operator"> + </div>
        
            <div onClick="append('0')" class="zero btn"> 0 </div>
            <div onClick="dot" class="btn"> . </div>
            <div onClick="equal" class="btn operator"> = </div>
          
        
          </div>
        )
    }
}
export default Calculator