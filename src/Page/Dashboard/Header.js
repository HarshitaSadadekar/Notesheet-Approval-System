import React from 'react'

function Header({ setIsCreating }){
    return (
        <header>
            <h1>Notesheets</h1>
            <div>
                <button onClick={() => setIsCreating(true)} className='round-button'>Create Notesheet</button>
            </div>
        </header>
    )
}

export default Header