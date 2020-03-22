import React , {Component} from 'react'
import './Calculator.css'

class App extends Component {
    state = {
        current : '',
        previous: '',
        operand : null

    }
    
    append = (event) => {
       //current:event.target.innerHTML
       const val = event.target.innerHTML
       if(val === '.'){
        const checkIfDot = this.state.previous.indexOf('.')
        this.setState( (prev)=>{
            return{
                current: checkIfDot === -1 ? prev.current + '.' : prev.current
            }
        })
           
       }else{
        this.setState( (prev)=>{
            //prev.current :: allows me to access my intial state
           return{
            current: prev.current=== '0' ? val : prev.current + val
           } 
        })
       }
}
    //  
    clear = () =>{
        this.setState({current:'0',operand:'',previous:''})
    }
    percent = () => {
        this.setState( (prev) => {
            return{
                current: prev.current === '0'? '0' : parseFloat(prev.current) / 100 
            }
        })
    }
    sign = () => {
        this.setState( (prev) => {
            return{
                current: prev.current.charAt(0)==='-'  ? prev.current.slice(1) : `-${prev.current}`
            }
        }
        )}
    operator = (ev) => {
        const sign = ev.target.innerHTML
        this.setState( (prev) =>{
            return{
                operand : sign,
                previous: prev.current,
                current:'0'
            }
        })
        }
        equal = () =>{
            const sign = this.state.operand
            if(sign==='/'){
                this.setState({current: this.state.previous / this.state.current,previous:null})
            }else if(sign==='*'){
                this.setState({current: this.state.previous * this.state.current,previous:null})
            }else if(sign==='+'){
                this.setState({current: this.state.previous + this.state.current,previous:null})
            }else if(sign==='-'){
                this.setState({current: this.state.previous - this.state.current,previous:null})
            }
        }
    render(){
        return(
            <div className="calculator">
            <div className="display"> {this.state.current ===''? 0 :this.state.current}  </div>

            <div onClick={this.clear} className="btn">C</div>
            <div onClick={this.sign}  className="btn">+/-</div>
            <div onClick={this.percent} className="btn">%</div>
            <div onClick={this.operator} className="btn operator">/</div>
        
            <div onClick={this.append} className="btn">7</div>
            <div onClick={this.append} className="btn">8</div>
            <div onClick={this.append} className="btn">9</div>
            <div onClick={this.operator}  className="btn operator">*</div>
        
            <div onClick={this.append} className="btn">4</div>
            <div onClick={this.append} className="btn">5</div>
            <div onClick={this.append} className="btn">6</div>
            <div onClick={this.operator} className="btn operator">-</div>
        
            <div onClick={this.append} className="btn">1</div>
            <div onClick={this.append} className="btn">2</div>
            <div onClick={this.append} className="btn">3</div>
            <div onClick={this.operator}  className="btn operator">+</div>
        
            <div onClick={this.append} className="zero btn">0</div>
            <div onClick={this.append} className="btn">.</div>
                <div onClick={this.equal} className="btn operator"> = </div>
          
        
          </div>
        )
    }
}
export default App