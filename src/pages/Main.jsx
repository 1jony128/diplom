import React from 'react'
import Header from '../components/Header'

function Main({printMode, children}) {
    return (
        <div>
            <Header printMode={printMode}/>
            {children}
        </div>
    )
}

export default Main
