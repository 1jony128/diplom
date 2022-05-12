import React from 'react'

function ItemSpec({item, onSelect}) {
    return (
        <div className='row-li'>
            <li
            
            onClick={() => onSelect(item)}
            >
                <span>{item.shifr} </span>
                <span> {item.spec}</span>
            </li>
        </div>
    )
}

export default ItemSpec
