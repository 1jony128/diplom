import { Button, ButtonGroup } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Header({printMode}) {
    if(printMode){
        return (
            <div>
            <Outlet />
          </div>
        )
    }
    return (
        <div>
        <h1>Портал абитуриента</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
            <ButtonGroup variant="text" aria-label="text button group">
                <Button >
                    <Link to="/">Домой</Link>
                </Button>
                <Button>
                    <Link to="/applicant">Форма абитуриента</Link>
                </Button>
                <Button>
                    <Link to="/specializationy">Форма специальностей</Link>
                </Button>
            </ButtonGroup>
        </nav>
        <Outlet />
      </div>
    )
}

export default Header
