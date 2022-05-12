import React from 'react'

function Select() {
    return (
        <div>
            <span>Форма обучения</span>
            <select
                defaultValue={"0"}
                size="small"
            >
                <option disabled value={0}></option>
                <option value={10}>Да</option>
                <option value={20}>Нет</option>
            </select>
        </div>
    )
}

export default Select
