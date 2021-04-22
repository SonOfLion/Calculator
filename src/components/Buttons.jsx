import  React,{ useState } from 'react';
import PropTypes from 'prop-types';

const Buttons = () => {
    const [value, setValue] = useState('');
    const [memory,setMemory] = useState(null);
    const [operand,setOperator] = useState(null);

    const handleClick = operator => {
        setValue(value + operator.target.attributes.operator.value);
    }

    const reset = operator => {
        if(`${operator} === ${"AC"}`){
            setValue('');
        }
    }

    const getProcent = operator => {
        if(`${operator} === ${"%"}`){
            setValue(value / 100)
        }
    }

    const sum = operator => {
        if(`${operator} === ${"+"}`){
            setMemory(value)
            setValue('');
            setOperator("+");
        }
    }

    const subtract = operator => {
        if(`${operator} === ${"-"}`){
            setMemory(value)
            setValue('');
            setOperator("-");
        }
    }

    const plusMinus = operator => {
        if(`${operator} === ${"+/-"}`){
            setValue(value * -1);
        }
    }

    const multiply = operator => {
        if(`${operator} === ${"*"}`){
            setMemory(value)
            setValue('');
            setOperator("*");
        }
    }

    const divide = operator => {
        if(`${operator} === ${"/"}`){
            setMemory(value)
            setValue('');
            setOperator("/");
        }
    }

    const memoryClean = operator => {
        if(`${operator} === ${"mc"}`){
            setMemory(value)
            setValue('');
            setOperator("mc");
        }
    }

    const memoryRead = operator => {
        if(`${operator} === ${"mr"}`){
            setMemory(memory)
            setOperator("mr");
        }
    }
    
    const equall = operator => {
        if(!operator) {
            return alert('Something went wrong!')
        }

        if(operand === `${"+"}`){
            setValue(+memory + +value)
        }

        else if(operand === `${"-"}`){
            setValue(+memory - +value)
        }

        else if(operand === `${"*"}`){
            setValue(+memory * +value)
        }

        else if (operand === `${"/"}`){
            setValue(+memory / +value)
        }

        setMemory(null);
        setOperator(null);
    }
    return (
        <>
            <div className="input">
                <input
                    onChange={e => setValue(e.target.value)}
                    value={value}
                    className="input__field"
                    type="text"
                    max="200"
                    placeholder="0"
                />
            </div>
            <div className="btns">
                <div className="btns noselect" >
                    <button className="btns__numbers" operator="AC" onClick={reset}>AC</button>
                    <button className="btns__numbers" operator="+/-" onClick={plusMinus}>+/-</button>
                    <button className="btns__numbers" operator="/" onClick={divide}>/</button>
                    <button className="btns__numbers" operator="%" onClick={getProcent}>%</button>
                    <button className="btns__numbers" operator="mc" onClick={memoryClean}>mc</button>
                    <button className="btns__numbers" operator="mr" onClick={memoryRead}>mr</button>
                    <button className="btns__numbers" operator="m-" onClick={handleClick}>m-</button>
                    <button className="btns__numbers" operator="m+" onClick={handleClick}>m+</button>
                    <button className="btns__numbers" operator="7" onClick={handleClick}>7</button>
                    <button className="btns__numbers" operator="8" onClick={handleClick}>8</button>
                    <button className="btns__numbers" operator="9" onClick={handleClick}>9</button>
                    <button className="btns__numbers" operator="*" onClick={multiply}>*</button>
                    <button className="btns__numbers" operator="4" onClick={handleClick}>4</button>
                    <button className="btns__numbers" operator="5" onClick={handleClick}>5</button>
                    <button className="btns__numbers" operator="6" onClick={handleClick}>6</button>
                    <button className="btns__numbers" operator="-" onClick={subtract}>-</button>
                    <button className="btns__numbers" operator="1" onClick={handleClick}>1</button>
                    <button className="btns__numbers" operator="2" onClick={handleClick}>2</button>
                    <button className="btns__numbers" operator="3" onClick={handleClick}>3</button>
                    <button className="btns__numbers" operator="+" onClick={sum}>+</button>
                    <button className="btns__numbers" operator="0" onClick={handleClick}>0</button>
                    <button className="btns__numbers" operator="," onClick={handleClick}>,</button>
                    <button className="btns__numbers" operator="=" onClick={equall}>=</button>
                </div>
            </div>
        </>
    )
};

Buttons.propTypes = {
    value: PropTypes.string,
    setValue: PropTypes.func,
    setOperator: PropTypes.func,
    setMemory: PropTypes.func,
    reset: PropTypes.func,
    equall: PropTypes.func,
    handleClick: PropTypes.func,
    sum: PropTypes.func,
    subtract: PropTypes.func,
    multiply: PropTypes.func,
    memoryRead: PropTypes.func,
    getProcent: PropTypes.func,
    divide: PropTypes.func,
    plusMinus: PropTypes.func,
}

Buttons.defaultProps = {
    input: PropTypes.number,
}
    
export default Buttons;