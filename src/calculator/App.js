import React , {useState} from 'react'
import './Calculator.css'

const App = () => {
    const [intialState, updateState] =  useState({
        current : '',
        previous: '',
        operand : null,
        finalAnswer: ''
    })
    const {current, previous, operand, finalAnswer} = intialState

    const append = (e) => {
        //check if the values are fill up
      
       updateState({current: current + e.target.innerHTML,previous:previous,operand:operand})
       
    }
    const operator = (e) => {
        updateState({previous:current, current:'', operand:e.target.innerHTML})
    }
    const percent = () => {
        updateState({current: current !=='' ? parseFloat(current) / 100 : '', previous:previous,operand:operand})
    }
    const equal = () =>{
        if(operand === '/'){
            updateState({current: parseFloat(previous) / parseFloat(current), previous:'', operand:null})
        }
        else if(operand === '*'){
            updateState({current: parseFloat(previous) * parseFloat(current), previous:'', operand:null})
        }
        else if(operand === '+'){
            updateState({current: parseFloat(previous) + parseFloat(current), previous:'', operand:null})
        }
        else if(operand === '-'){
            updateState({current: parseFloat(previous) - parseFloat(current), previous:'', operand:null})
        }
        else if(operand === '%'){
            updateState({current: parseFloat(previous) % parseFloat(current), previous:'', operand:null})
        }



    }
    //  
    const clear = () => {
    //setState({current:'0',operand:'',previous:''})
    updateState({current:'',previous:'',operand:null})
    }
    const sign = () => {
       updateState({current: current.charAt(0) ==='-'? current.slice(1) : `-${current}`, previous:previous,operand:operand})
       // current,  previous:previous, operand:operand})


    }
   
        return(
            <div className="calculator">
            <div className="display"> 
                <span>{ current ===''? 0 : current}</span> 
                <br/>
                <span >{ finalAnswer }</span> 
                </div>

            <div onClick={clear} className="btn">C</div>
            <div onClick={sign}  className="btn">+/-</div>
            <div onClick={percent} className="btn">%</div>
            <div onClick={operator} className="btn operator">/</div>
        
            <div onClick={append} className="btn">7</div>
            <div onClick={append} className="btn">8</div>
            <div onClick={append} className="btn">9</div>
            <div onClick={operator}  className="btn operator">*</div>
        
            <div onClick={append} className="btn">4</div>
            <div onClick={append} className="btn">5</div>
            <div onClick={append} className="btn">6</div>
            <div onClick={operator} className="btn operator">-</div>
        
            <div onClick={append} className="btn">1</div>
            <div onClick={append} className="btn">2</div>
            <div onClick={append} className="btn">3</div>
            <div onClick={operator}  className="btn operator">+</div>
        
            <div onClick={append} className="zero btn">0</div>
            <div onClick={append} className="btn">.</div>
                <div onClick={equal} className="btn operator"> = </div>
          </div>
        )
    }
export default App