import React, { useEffect, useState } from 'react'
import './DarkModeToggle.css'

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false)
    
    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode') === 'true'
        setDarkMode(savedMode)
    }, [])

    useEffect(() => {
        document.body.className = darkMode ? "dark-mode" : "light-mode"
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode])

    return (
        <div className='toggle'>
            <button className='dark-mode-toggle' onClick={() => setDarkMode((prev) => !prev)}>
                {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
        </div>
    )
}

export default DarkModeToggle