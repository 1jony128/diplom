import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material';

function CreateSpec({currentSpec, spec, setSpec, setCurrentSpec}) {

    const [shifr, setShifr] = useState(currentSpec?.shifr)
    const [specEdit, setSpecEdit] = useState(currentSpec?.spec);

    const onSave = () => {
        const clone = JSON.parse(JSON.stringify(spec))
        setSpec(clone.map(item => {
            if(item.id === currentSpec.id){
                return {
                    shifr,
                    spec: specEdit,
                    id: currentSpec.id
                }
            } else {
                return item
            }
        }));
        setShifr("");
        setSpecEdit("");
        setCurrentSpec(null);

    }

    useEffect(() => {
        if(currentSpec){
            setShifr(currentSpec.shifr);
            setSpecEdit(currentSpec.spec)
        }

    }, [currentSpec]);

    if(currentSpec){
        return (
            <div className="create-spec">
                <div className="row">
                    
                    <div>
                        <span>Специальность</span>
                        <input 
                            className={"input big"}
                            type={"text"}
                            onChange={(e) => setSpecEdit(e.target.value)}
                            value={specEdit}
                        />
                    </div>
                    <div>
                        <span>Шифр</span>
                        <input 
                            className={"input"}
                            type={"text"}
                            
                            onChange={(e) => setShifr(e.target.value)}
                            value={shifr}
                        />
                    </div>
                </div>
                <div className='row center'>
                    <Button 
                        variant={'contained'}
                        onClick={onSave}
                    >
                        Сохранить изменения
                    </Button>
                </div>
            </div>
        )   
    }

    return (
        <div className="create-spec">
            <span>Выберите специальность из списка для редактирования</span>
        </div>
    )
    
}

export default CreateSpec
