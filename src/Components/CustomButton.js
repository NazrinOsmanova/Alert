import React from 'react'

const CustomButton = () => {
    const warnMessage = () => {
        alert("Warn Message")
    }
    const hint = () => {
        alert("Hint")
    }
    const text = (e) => {
        e.target.previousElementSibling.classList.toggle("new")
    }
    return (
        <div className='customButton'>
            <p>Hello World</p>
            <button onClick={text}>Text</button>
            <button onClick={warnMessage}>Warn Message</button>
            <button onMouseOver={hint}>Hint</button>
        </div>
    )
}

export default CustomButton