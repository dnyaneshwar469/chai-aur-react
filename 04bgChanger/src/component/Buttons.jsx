import React from 'react'

const Buttons = ({onClick, bgColor, buttonText}) => {
    return (
        <div>
            <button 
                onClick={onClick} 
                className= {`outline-none px-4 py-2 rounded-full shadow-lg ${(bgColor === 'yellow' || bgColor === 'white') ? 'text-black' : 'text-white'}`}
                style={{backgroundColor: bgColor}}
            >
                {buttonText}
            </button>
        </div>
    )
}

export default Buttons;