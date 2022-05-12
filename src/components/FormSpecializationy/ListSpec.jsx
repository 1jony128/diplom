import React from 'react'
import ItemSpec from './ItemSpec'

function ListSpec({spec, onSelect}) {

    

    return (
        <div className="list-spec">
            <ul>
            <div className='row-li'>
                <li><b>Специальности</b></li>
            </div>
            
                {spec.map(item => {
                    return <ItemSpec key={item.id} item={item} onSelect={onSelect}/>
                })}
            </ul>
        </div>
)
}

export default ListSpec
