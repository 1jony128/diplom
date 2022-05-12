import React from 'react'

function Input(width) {
    return (
        <div>
            <div>
                <span>Место рождения</span>
                <input 
                    className={"input big"}
                    type={"text"}
                />
            </div>
            <div>
                <span>Место рождения</span>
                <input 
                    className={"input large"}
                    type={"text"}
                />
            </div>
            <div>
                <span>Место рождения</span>
                <input 
                    className={"input small"}
                    type={"text"}
                />
            </div>
            <div>
                <span>Место рождения</span>
                <input 
                    className={"input"}
                    type={"text"}
                />
            </div>
        </div>
    )
}

export default Input
