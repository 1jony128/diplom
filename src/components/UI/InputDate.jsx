import React from 'react'

function Input(width) {
    return (
        <div>
            <span>Дата подачи заявления</span>
            <input 
                className={"input large"}
                type={"date"}
            />
        </div>
    )
}

export default Input
