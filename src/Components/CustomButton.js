import React from 'react'

const CustomButton = (e) => {
    const warnMessage = (e) => {
        alert("Warn Message")
        e.target.classList.add("red");
    }
    const hint = (e) => {
        alert("Hint");
        e.target.classList.add("italic");
    }
    const hint2 = (e) => {
        e.target.classList.remove("italic");
    }
    const warnMessage2 = (e) => {
        e.target.classList.remove("red");
    }
    const text = (e) => {
        e.target.previousElementSibling.classList.toggle("new")
    }
    return (
        <div className='customButton'>
            <p>Hello World</p>
            <button onClick={text}>Text</button>
            <button onClick={warnMessage} onMouseOut={warnMessage2}>Warn Message</button>
            <button onMouseOver={hint} onMouseOut={hint2}>Hint</button>
        </div>
    )
}

export default CustomButton