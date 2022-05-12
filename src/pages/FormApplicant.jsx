import { Box, Button, FormControl, FormHelperText, Input, InputLabel, TextField } from '@mui/material'
import PersonalData from '../components/FormApplicant/PersonalData'
import ResultBtn from '../components/ResultBtn'
import SpecialForm from '../components/FormApplicant/SpecialForm'
import SocialForm from '../components/FormApplicant/SocialForm'
import InventoryDoc from '../components/FormApplicant/InventoryDoc'

function FormApplicant({setPrintMode, printMode}) {
    const print = () => {
        setPrintMode(true)

    }
    const printRes = () => {
        window.print();
        setPrintMode(false)
    }

    console.log(printMode)
    return (
        <div className='form'>

            <div>
                <h2>Форма абитуриента</h2>
                <PersonalData />
                <SpecialForm />
                <SocialForm />
                <div className='row btn-group'>
                <ResultBtn print={print}/>
                {
                    printMode && 
                    <div className='row btn'>
                        <Button 
                            variant={'contained'} 
                            onClick={printRes}
                        >
                            НА печать
                        </Button>
                    </div>
                }
                </div>
                
            </div>
            <div>
                <InventoryDoc />
            </div>
            
        </div>
    )
}

export default FormApplicant
