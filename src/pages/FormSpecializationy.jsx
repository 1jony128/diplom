
import React, { useContext, useState } from 'react'
import CreateSpec from '../components/FormSpecializationy/CreateSpec';
import ListSpec from '../components/FormSpecializationy/ListSpec';
import { SpecContext } from '../context/SpecContext';
function FormSpecializationy() {
    const { spec, setSpec } = useContext(SpecContext);

    const [currentSpec, setCurrentSpec] = useState(null)

    const onSelect = (item) => {
        setCurrentSpec(item)
    }

    return (
        <div>
            <h2>форма специальностей</h2>
            <div className='main'>
                <CreateSpec 
                    currentSpec={currentSpec} 
                    setCurrentSpec={setCurrentSpec}
                    spec={spec} 
                    setSpec={setSpec}
                />
                <ListSpec 
                    spec={spec} 
                    onSelect={onSelect}
                />
            </div>
        </div>
    )
}

export default FormSpecializationy
