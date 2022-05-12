import { Button } from '@mui/material'

function ResultBtn({print}) {

    return (
        <div className='row'>
            <Button onClick={print} variant={'contained'}>
               предварительный просмотр
            </Button>
        </div>
    )
}

export default ResultBtn
