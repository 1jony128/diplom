import React from 'react'

function Input(width) {
    return (
        <div>
            <span>Номер заявления</span>
            <input 
                className={"input small"}
                placeholder={"Номер заявления"}
                type={"number"}
            />
        </div>
    )
}

export default Input
